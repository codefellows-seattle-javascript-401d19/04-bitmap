'use strict';

// const bitmap = require('./lib/bitmap');
const readImg = require('./lib/read-img');
const transImg = require('./lib/trans-img');

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];
const transformName = process.argv[4];

readImg.getFile(inputFilePath, (error, data) => {
  if(error) {
    console.error(error);
    return;
  }

  const bitmapProps = data;
  console.log(bitmapProps);
  transImg.transFile(transformName, bitmapProps, (error, data) => {
    if(error) {
      console.error(error);
      return;
    }
    const transformedImage = data;

    writeImg.writeFile(outputFilePath, transformedImage, (errror, data) => {
      if(error) {
        console.error(error);
        return;
      }
      console.log('Transform complete!');
    });
  });

});
