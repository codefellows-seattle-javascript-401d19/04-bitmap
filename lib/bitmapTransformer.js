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
  invertColor(parsedBitmap.colorPalette);
  // invertColor(JSON.parse(parsedBitmap.bgrValues).data);
};

bitmapTransformer.readFile = (filePath, callback) => {
  fs.readFile(`${__dirname}/../asset/${filePath}`,
    (error, data) => {
      if (error)
        console.error(error);

      // data is the contents of the file being read (i.e. data is the buffer)
      bitmapTransformer.getBufferData(data);
    }
  );
};

// let colorToGreyscale = () => {
// }
//
let invertColor = (colorPalette) => {
  //changing blue(?) values
  for (let i = 1; i < colorPalette.length; i += 4){
    // colorPalette.fill(255 - colorPalette[i], 0);
    colorPalette[i] = 255 - colorPalette[i];
  }
  //changing green?
  for (let i = 2; i < colorPalette.length; i += 4){
    colorPalette[i] = 255 - colorPalette[i];
  }
  //changing red?
  for (let i = 3; i < colorPalette.length; i += 4){
    colorPalette[i] = 255 - colorPalette[i];
  }
  return colorPalette;
}

// let randomizeColors = () => {
// }

//get the bmp file-- done
//get the buffer data-- done
//only get the pixel color table data-- done

//transform a bitmap image
  //access individual colors in the palette-- done
  //change a color's blue, green, or red value
