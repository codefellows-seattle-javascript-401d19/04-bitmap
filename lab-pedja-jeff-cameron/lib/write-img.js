'use strict';

const writeImg = module.exports = {};

const fs = require('fs');

writeImg.writeFile = (outputFilePath, transformedImage, callback) => {
  fs.writeFile(outputFilePath, transformedImage, (error, data) => {
    if(error) {
      callback(error);
      return;
    }
    callback(null, data);
  });
};
