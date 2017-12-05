'use strict';

// export the module so we can use it to test with
const asset = module.exports = {};
const parse = require('../../lib/parser');

// I think the only thing you need to change in this one is the offset to the pixel table. See last row of entries to figure out how to calculate it
let bmpHeader = [
  66, 77, // 42 4D -> BM File header field: Type BM // LEAVE ALONE
  218, 58, 0, 0, // DA 3A 00 00 ->  File Size: 15066 bytes // BMP Header + DIB Header + (widthInPixels * heightInPixels) + (numColorsInPalette * 4) // Don't know where this is used?
  0, 0, 0, 0, // 00 00 00 00 reserved 4 bytes // LEAVE ALONE
  66, 0, 0, 0, // 42 00 00 00 -> Offset to the pixel table: 66 = BMP Header(always 14) + DIB Header(always 40) + colorPalateBytes(4bytes*numColors) = 14 + 40 + 4 * 3 = 66
];

// The values you would want to change here would be the width and the height
let dibHeader = [
  40, 0, 0, 0, // 28 00 00 00 -> DIB header size: 40 // LEAVE ALONE
  100, 0, 0, 0, // 64 00 00 00 -> Width (signed): 100 // must determine what this number is in hex
  150, 0, 0, 0, // 96 00 00 00 -> Height (signed): 150 // must determine what this number is in hex
  1, 0, // 01 00 -> number of color planes must be 1 // LEAVE ALONE
  8, 0, // 10 00 -> number of bits per pixel: 8 // LEAVE ALONE
  0, 0, 0, 0, // 00 00 00 00 -> compression method: 0, none // LEAVE ALONE
  0, 0, 0, 0, // 00 00 00 00 -> size of the raw bitmap data // Don't know where this is used?
  0, 0, 0, 0, // 00 00 00 00 -> horizontal resolution, pixels per meter, signed: // Don't know where this is used?
  0, 0, 0, 0, //00 00 00 00 -> vertical resolution, pixels per meter, signed: // Don't know where this is used?
  3, 0, 0, 0, // 03 00 00 00 -> number of colors in the color palette: 3 // Don't know where this is used?
  0, 0, 0, 0, // 00 00 00 00 -> number of important colors: 0, meaning all are important // LEAVE ALONE
];

// This is where you will define all of your colors. You can have up to 256 unique colors.
// Color values are composed of 4 numbers in the order blue, green, red, and are followed by a number that apparently doesn't do anything, but that I thought was an index. Apparently the index is determined automatically.
let colorPalette = [
  255, 0, 0, 0, // 02 00 00 FF -> color 0: blue, index 0
  0, 255, 0, 0, // 00 FF 00 00 -> color 1: green, index 1
  0, 0, 255, 0, // 01 00 FF 00 -> color 2: red, index 2
];

// here we define the pixel array. each pixel is stored as a reference back to one of the colors in the color palette, as indicated by their index. You should have the same number of pixels here as your width * height. Numbers go in row by bow, bottom left to bottom right, then up.
let pixelArray = [];
//this for loop is adding the color indices to the pixel array, a third of each color together
for(let row = 0; row < 150; row++) {
  for(let col = 0; col < 100; col++) {
    if(row < 50)
      pixelArray.push(0);
    else if(row < 100)
      pixelArray.push(1);
    else
      pixelArray.push(2);
  }
}

// Combine all of these arrays into a single array.
let bmpArray = bmpHeader.concat(dibHeader).concat(colorPalette).concat(pixelArray);
let bmpArrayFLipY = bmpHeader.concat(dibHeader).concat(colorPalette).concat(pixelArray.reverse());

// Make a buffer from the array, so we can write it to a file.
let bmpBuffer = Buffer.from(bmpArray);
let bmpBufferFlipY = Buffer.from(bmpArrayFLipY);

// export the buffer so we can test with it.
asset.testBuffer = bmpBuffer;
asset.testBufferColorPalette = Buffer.from(colorPalette);
asset.testData1 = {colorPaletteBuffer: Buffer.from(colorPalette)};
asset.testData2 = {colorPaletteBuffer: Buffer.from(colorPalette)};
asset.testData3 = {colorPaletteBuffer: Buffer.from(colorPalette)};
asset.testData4 = {colorPaletteBuffer: Buffer.from(colorPalette)};
asset.testData5 = {colorPaletteBuffer: Buffer.from(colorPalette)};
asset.testData6 = {colorPaletteBuffer: Buffer.from(colorPalette)};
asset.testData7 = {colorPaletteBuffer: Buffer.from(colorPalette)};
asset.testBufferFlipY = bmpBufferFlipY;
asset.testDataFlipY = parse(bmpBufferFlipY);