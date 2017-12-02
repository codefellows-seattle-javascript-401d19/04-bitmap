'use strict';

const fs = require(`fs`);
const bmpPaths = fs.readdirSync(`${__dirname}/../asset`);
const bitmapTransformer = module.exports = {};

const PIXEL_TABLE_OFFSET = 10; //gives the offset of where the pixel data starts- yields 1078
const BITMAP_FILE_HEADER_SIZE = 14; //in bytes
const DIB_HEADER_SIZE = 40; //in bytes
const COLOR_PALETTE_OFFSET = (BITMAP_FILE_HEADER_SIZE + DIB_HEADER_SIZE);

bitmapTransformer.getBufferData = (buffer) => {
  let parsedBitmap = {};

  parsedBitmap.buffer = buffer;
  buffer.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
  parsedBitmap.colorPalette = buffer.slice(COLOR_PALETTE_OFFSET, buffer.pixelTableOffset);

  // parsedBitmap.bgrValues = JSON.stringify(parsedBitmap.colorPalette);
  // console.log(parsedBitmap.bgrValues);
  // console.log(JSON.parse(parsedBitmap.bgrValues), `these are the parsed bgr values`);
  invertColor(parsedBitmap.colorPalette);// instead of this pass in whatever input pathway was provided by the user
  // invertColor(JSON.parse(parsedBitmap.bgrValues).data);
  bitmapTransformer.renderNewFile(parsedBitmap.buffer);
  // console.log(`renderNewFile ran`);
};

bitmapTransformer.readFile = (filePath, callback) => {
  fs.readFile(`${__dirname}/../asset/${filePath}`,
    (error, data) => {
      if (error)
        console.error(error);

      bitmapTransformer.getBufferData(data);
      // console.log(`getBufferData ran`);
    }
  );
};

bitmapTransformer.renderNewFile = (parsedBitmapData) => { //create a new bmp file using the new color palette
  fs.writeFile(`modified.bmp`, parsedBitmapData, (error) => {
    if (error)
      console.error(error);
  });
}


let colorToGreyscale = (colorPalette) => {
  //multiply each color value by .33
  for (let i = 1; i < colorPalette.length; i += 4){
    console.log(colorPalette[i], `this is the unmodified color`);
    colorPalette[i] = (.33 * colorPalette[i]);
    console.log(colorPalette[i], `this is the modified color`);
  }
}

let invertColor = (colorPalette) => {
  //change blue values
  for (let i = 1; i < colorPalette.length; i += 4){
    // colorPalette.fill(255 - colorPalette[i], 0); //try to use .fill instead?
    colorPalette[i] = 255 - colorPalette[i];
  }
  //change green
  for (let i = 2; i < colorPalette.length; i += 4){
    colorPalette[i] = 255 - colorPalette[i];
  }
  //change red
  for (let i = 3; i < colorPalette.length; i += 4){
    colorPalette[i] = 255 - colorPalette[i];
  }
}

let randomizeColors = (colorPalette) => {
  for (let i = 1; i < colorPalette.length; i++){ //play with i incrementing; what happens with i += 4?
    colorPalette[i] = Math.floor(Math.random() * 255);
  }
}
