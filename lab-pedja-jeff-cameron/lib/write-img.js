'use strict';

const writeImg = module.exports = {};

const fs = require('fs');

writeImg.writeFile = (outputFilePath, constructedBitmap, callback) => {
  fs.writeFile(outputFilePath, constructedBitmap.buffer, () => {
    // if(error) {
    //   callback(error);
    //   return;
    // }
    callback(null);
  });
};
