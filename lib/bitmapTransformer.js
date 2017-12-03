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

  // console.log(...parsedBitmap.colorPalette);
  colorToGreyscale(parsedBitmap.colorPalette);// instead of parsedBitmap.colorPalette pass in whatever input pathway was provided by the user
  // console.log(...parsedBitmap.colorPalette);
  bitmapTransformer.renderNewFile(buffer);
};

bitmapTransformer.readFile = (filePath, callback) => {
  fs.readFile(`${__dirname}/../asset/${filePath}`,
    (error, data) => {
      if (error)
        console.error(error);

      bitmapTransformer.getBufferData(data);
    }
  );
};

bitmapTransformer.renderNewFile = (parsedBitmapData) => { //create a new bmp file using the new color palette
  fs.writeFile(`modified.bmp`, parsedBitmapData, (error) => {
    if (error)
      console.error(error);
  });
};


let colorToGreyscale = (colorPalette) => {
  //Luminosity based grayscale = 0.21 × R + 0.72 × G + 0.07 × B
  for (let i = 0; i < colorPalette.length; i += 4){
    let avgColor = (colorPalette[i] * .11) + (colorPalette[i + 1] * .59) + (colorPalette[i + 2] * .3);
    colorPalette[i] = avgColor;
    colorPalette[i + 1] = avgColor;
    colorPalette[i + 2] = avgColor;
    // colorPalette[i] = colorPalette[i + 1] = colorPalette[i + 2] = colorAvg;
  }
};

let invertColor = (colorPalette) => {
  //change blue values
  for (let i = 0; i < colorPalette.length; i += 4){
    // try to use .fill instead  // colorPalette.fill(255 - colorPalette[i], 0);
    colorPalette[i] = 255 - colorPalette[i];
  }
  //change green
  for (let i = 1; i < colorPalette.length; i += 4){
    colorPalette[i] = 255 - colorPalette[i];
  }
  //change red
  for (let i = 2; i < colorPalette.length; i += 4){
    colorPalette[i] = 255 - colorPalette[i];
  }
};

let randomizeColors = (colorPalette) => {
  for (let i = 0; i < colorPalette.length; i += 4){
    colorPalette[i] = Math.floor(Math.random() * 255);
  }
};
