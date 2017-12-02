'use strict';


const transformedBitmap = require('./lib/transform')
const fs = require('fs');

// Read file path needs to be dynamic TODO: likely just a parameter that has an argument passed through from the test.(PARAMETER YES "PATH")
fs.readFile(`${__dirname}/asset/house.bmp`, (error,data) => {
  if(error)
  {
    console.error(error);
    return;
  }


  let transformedBitmapData = transformedBitmap.invertColors(data);
  
  // console.log(transformedBitmapData);
});