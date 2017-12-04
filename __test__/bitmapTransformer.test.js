'use strict';

const fs = require(`fs`);
const bitmapTransformer = require(`../lib/bitmapTransformer`);
const indexJS = require(`../index.js`);
const bmpPaths = fs.readdirSync(`${__dirname}/../asset`);

describe(`bitmapTransformer.js`, () => {
  test(`greyscale image should be returned for greyscale transform function`, () => {
    expect(indexJS.transformImage(bmpPaths[2], `newImage.bmp`, [`invert`, `greyscale`])).not.toBeNull();
  })
  // test(`inverted color image should be returned for inverted color transform function`, () => {
  //   expect(bitmapTransformer.transform(bmpPaths[2], `transformedHouse.bmp`, `invert`)).not.toBeNull();
  // })
  // test(`randomized color image should be returned for randomized color transform function`, () => {
  //   expect(bitmapTransformer.transform(bmpPaths[2], `transformedHouse.bmp`, `randomize`)).not.toBeNull();
  // })
});
