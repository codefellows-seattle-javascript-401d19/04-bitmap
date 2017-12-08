'use strict';

const bitmapTransformer = require(`./lib/bitmapTransformer`);
const indexJS = module.exports = {};

let args = process.argv.slice(2);

indexJS.transformImage = (inputPath, outputPath, transforms) => {
  if(!inputPath || !outputPath || transforms.length < 1){
    throw new Error(`Please provide an input path, an output path, and at least one transformation type`);
  }

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
        throw new ReferenceError(`The transformation type must be 'invert', 'greyscale', or 'randomize'`);
      }
    }

    bitmapTransformer.renderNewFile(outputPath, parsedBitmap.buffer);

    console.log(`Success! Your new image has been created`);
  });
};

// indexJS.transformImage(args[0], args[1], args.slice(2));
