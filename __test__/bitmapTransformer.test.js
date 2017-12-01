'use strict';

const fs = require(`fs`);
const bitmapTransformer = require(`../lib/bitmapTransformer`);
const bmpPaths = fs.readdirSync(`${__dirname}/../asset`);

describe(`bitmapTransformer.js`, () => {
  test(`buffer should not be empty`, () => {
    expect(bitmapTransformer.getBuffer(bmpPaths[0])).not.toBeNull();
  })
  // test(`Make sure that user provides an input file path, output file path, and transform option`, () => {
  //   expect(bitmapTransformer.alterBMP(`bitmap.bmp`, `newfile.bmp`, `greyscale`)).not.toBeNull();
  // });
});

//expect it to take in .bmp file from assets folder, run 1+ color transformations, then output a new file
