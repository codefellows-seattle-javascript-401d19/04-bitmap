'use strict';

const indexModule = module.exports = {};
const transformedBitmap = require('./lib/transform');
const fs = require('fs');

// Read file path needs to be dynamic TODO: likely just a parameter that has an argument passed through from the test.(PARAMETER YES "PATH")
indexModule.read = fs.readFile(`${__dirname}/asset/house.bmp`, (error,data) => {
  if(error) {
    console.error(error);
    return;
  }
  transformedBitmap.greyScale(data);


  // transformedBitmap.invert(data);

  // transformedBitmap.greenRedSwitch(data);
  
  // console.log(transformedBitmapData);
});

