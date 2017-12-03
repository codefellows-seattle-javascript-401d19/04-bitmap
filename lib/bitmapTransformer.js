'use strict';

const fs = require(`fs`);
const bmpPaths = fs.readdirSync(`${__dirname}/../asset`);
const bitmapTransformer = module.exports = {};

const BITMAP_FILE_HEADER_SIZE = 14; //in bytes
const DIB_HEADER_SIZE = 40; //in bytes
const COLOR_PALETTE_OFFSET = (BITMAP_FILE_HEADER_SIZE + DIB_HEADER_SIZE); //where color palette starts
const PIXEL_TABLE_OFFSET = 10; //gives the offset of where the pixel data starts (i.e. end of color palette)

bitmapTransformer.alterImage = (inputPath, outputPath, transform) => {
  // console.log(inputPath, `is the input path`);
  console.log(bitmapTransformer.readFile(inputPath));
  // console.log(bitmapTransformer.readFile(inputPath), `should be the data`);
  let data = bitmapTransformer.readFile(inputPath);
  // console.log(data, `is the data`);
  let parsedBitmap = bitmapTransformer.getColorPalette(data);

  greyscale(parsedBitmap.colorPalette);
  // transformType2(parsedBitmap.colorPalette);
  // transformType3(parsedBitmap.colorPalette);
  renderNewFile(outputPath, parsedBitmap.buffer);
};

bitmapTransformer.getColorPalette = (buffer) => {
  let parsedBitmap = {};
  // console.log(buffer);
  parsedBitmap.buffer = buffer;
  // console.log(parsedBitmap.buffer, `is the parsedBitmap buffer`);
  buffer.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
  parsedBitmap.colorPalette = buffer.slice(COLOR_PALETTE_OFFSET, buffer.pixelTableOffset);

  return parsedBitmap;

  // invertColor(parsedBitmap.colorPalette);// instead of parsedBitmap.colorPalette pass in whatever input pathway was provided by the user
  // bitmapTransformer.renderNewFile(parsedBitmap.buffer);
};

bitmapTransformer.readFile = (pathOfInput, callback) => {
  fs.readFile(`${__dirname}/../asset/${pathOfInput}`,
    (error, data) => {
      if (error)
        console.error(error);

      return data;
    }
  );
};

bitmapTransformer.renderNewFile = (outputPath, parsedBitmapData) => {
  fs.writeFile(outputPath, parsedBitmapData, (error) => {
    if (error)
      console.error(error);
  });
};


let greyscale = (colorPalette) => {
  //Luminosity based grayscale: gray value = 0.21 × R + 0.72 × G + 0.07 × B
  for (let i = 0; i < colorPalette.length; i += 4){
    let weightedGrayscaleAvg = (colorPalette[i] * .11) + (colorPalette[i + 1] * .59) + (colorPalette[i + 2] * .3);
    colorPalette[i] = weightedGrayscaleAvg;
    colorPalette[i + 1] = weightedGrayscaleAvg;
    colorPalette[i + 2] = weightedGrayscaleAvg;
  }
};

let invert = (colorPalette) => {
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

let randomize = (colorPalette) => {
  for (let i = 0; i < colorPalette.length; i += 4){
    colorPalette[i] = Math.floor(Math.random() * 255);
  }
};
