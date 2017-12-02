'use strict';

const readImg = require('./lib/read-img');
const transImg = require('./lib/trans-img');
const writeImg = require('./lib/write-img');

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];
const transformName = process.argv[4];

readImg.getFile(inputFilePath, (error, data) => {
  if(error) {
    console.error(error);
    return;
  }

  let constructedBitmap = data;

  transImg.transFile(transformName, constructedBitmap, (error, data) => {
    if(error) {
      console.error(error);
      return;
    }
    constructedBitmap = data;

    writeImg.writeFile(outputFilePath, constructedBitmap, (errror, data) => {
      if(error) {
        console.error(error);
        return;
      }
      console.log(data);
      console.log('Transform complete!');
    });
  });

});
