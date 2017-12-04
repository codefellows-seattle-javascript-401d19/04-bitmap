#!/usr/bin/env node

'use strict';

const bitmapTransformer = require(`./lib/bitmapTransformer`);
const fs = require(`fs`);
const indexJS = module.exports = {};

let args = process.argv.slice(2);

indexJS.transformImage = (inputPath, outputPath, transforms) => {
  bitmapTransformer.readFile(inputPath, (data) => {
      let parsedBitmap = bitmapTransformer.getColorPalette(data);

      for(let i = 0; i < transforms.length; i++){
        if(transforms[i] === `greyscale`) {
          bitmapTransformer.greyscale(parsedBitmap.colorPalette);
        }
        else if(transforms[i] === `randomize`){
          bitmapTransformer.randomize(parsedBitmap.colorPalette);
        }
        else if(transforms[i] === `invert`){
          bitmapTransformer.invert(parsedBitmap.colorPalette);
        }
        else{
          throw new ReferenceError(`the transform operation must be 'invert', 'greyscale', or 'randomize'`);
        }
      }

      bitmapTransformer.renderNewFile(outputPath, parsedBitmap.buffer);
    });
}
