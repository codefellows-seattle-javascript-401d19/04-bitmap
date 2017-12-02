'use strict';


const transformedBitmap = require('./lib/transform');
const fs = require('fs');

// Read file path needs to be dynamic TODO: likely just a parameter that has an argument passed through from the test.(PARAMETER YES "PATH")
fs.readFile(`${__dirname}/asset/house.bmp`, (error,data) => {
  if(error) {
    console.error(error);
    return;
  }

  // transformedBitmap.invert(data);

  // transformedBitmap.greenRedSwitch(data);
  
  // console.log(transformedBitmapData);
});

fs.writeFile('NEWHOUSE.bmp', (data, err) => {
  if (err) throw err;
  console.log('The file has been saved!');

  return transformedBitmap.greyScale(data);
});