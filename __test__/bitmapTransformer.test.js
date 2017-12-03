'use strict';

const fs = require(`fs`);
const bitmapTransformer = require(`../lib/bitmapTransformer`);
const bmpPaths = fs.readdirSync(`${__dirname}/../asset`);

describe(`bitmapTransformer.js`, () => {
  test(`buffer should not be empty`, () => {
    expect(bitmapTransformer.readFile(bmpPaths[0])).not.toBeNull();
  })
});

//expect it to take in .bmp file from assets folder, run 1+ color transformations, then output a new file
