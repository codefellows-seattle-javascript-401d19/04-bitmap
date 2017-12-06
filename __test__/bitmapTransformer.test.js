'use strict';

// const fs = require(`fs`);
// const bitmapTransformer = require(`../lib/bitmapTransformer`);
const indexJS = require(`../index.js`);

describe(`bitmapTransformer.js`, () => {
  test(`indexJS.transformImage should return an edited image based on the transform operation provided if no errors are present`, () => {
    expect(() => {
      indexJS.transformImage(`house.bmp`, `output.bmp`, 'invert');
    }).not.toThrow();
    expect(() => {
      indexJS.transformImage(`house.bmp`, `output.bmp`, 'greyscale');
    }).not.toThrow();
    expect(() => {
      indexJS.transformImage(`house.bmp`, `output.bmp`, 'randomize');
    }).not.toThrow();
  });
  test(`indexJS.transformImage should return an error if the transform type provided is not one of the three options`, () => {
    expect(() => {
      indexJS.transformImage(`house.bmp`, `output.bmp`, ['blah']);
    }).toThrow();
  });
  test(`indexJS.transformImage should return an error if fewer than three parameters are provided`, () => {
    expect(() => {
      indexJS.transformImage(`house.bmp`, `output.bmp`);
    }).toThrow();
  });
});
