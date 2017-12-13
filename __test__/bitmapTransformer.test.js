'use strict';

const indexJS = require(`../index.js`);

let args;
console.log(args, `are the original args`);

describe(`bitmapTransformer.js`, () => {
  test(`indexJS.transformImage should return an edited image based on the transform operation provided if no errors are present`, () => {
    expect(() => {
      args = [`house.bmp`,`invert.bmp`,`invert`];
      // console.log(args, `are the changed args`);
      indexJS.transformImage(...args);
    }).not.toThrow();
    expect(() => {
      args = [`house.bmp`,`greyscale.bmp`,`greyscale`];
      indexJS.transformImage(...args);
    }).not.toThrow();
    expect(() => {
      args = [`house.bmp`,`randomize.bmp`,`randomize`];
      indexJS.transformImage(...args);
    }).not.toThrow();
  });
  test(`indexJS.transformImage should return an error if the transform type provided is not one of the three options`, () => {
    expect(() => {
      args = [`house.bmp`,`randomize.bmp`,[blah]];
      indexJS.transformImage(...args);
    }).toThrow();
  });
  test(`indexJS.transformImage should return an error if fewer than three parameters are provided`, () => {
    expect(() => {
      args = [`house.bmp`,`randomize.bmp`];
      indexJS.transformImage(...args);
    }).toThrow();
  });
});
