'use strict';

const imageTransformer = require(`../lib/imageTransformer.js`);

let args;

describe(`bitmapTransformer.js`, () => {
  test(`imageTransformer.transformImage should return an edited image based on the transform operation provided if no errors are present`, () => {
    expect(() => {
      args = [`house.bmp`,`invert.bmp`,`invert`];
      imageTransformer.transformImage(...args);
    }).not.toThrow();
    expect(() => {
      args = [`house.bmp`,`greyscale.bmp`,`greyscale`];
      imageTransformer.transformImage(...args);
    }).not.toThrow();
    expect(() => {
      args = [`house.bmp`,`randomize.bmp`,`randomize`];
      imageTransformer.transformImage(...args);
    }).not.toThrow();
  });
  test(`imageTransformer.transformImage should return an error if the transform type provided is not one of the three options`, () => {
    expect(() => {
      args = [`house.bmp`,`randomize.bmp`,[blah]];
      imageTransformer.transformImage(...args);
    }).toThrow();
  });
  test(`imageTransformer.transformImage should return an error if fewer than three parameters are provided`, () => {
    expect(() => {
      args = [`house.bmp`,`randomize.bmp`];
      imageTransformer.transformImage(...args);
    }).toThrow();
  });
});
