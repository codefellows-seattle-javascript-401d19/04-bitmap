'use strict';

const indexModule = module.exports = {};
// const transformedBitmap = require('./lib/transform');
// const fs = require('fs');
const readWrite = require('./lib/write.js');

let cliArgs = process.argv.slice(2);

let transform = null;

// TODO : rewrite with IF switches for all transformations
if(cliArgs[1] === 'invert')
  transform = 'invert';
else
  console.error('MUST use invert - its the only one');

let bmpPath = cliArgs[0];  
readWrite.readBMP(bmpPath,transform,(error,data) => {
  console.log(`ready to transform the bmp!`);
  
  if(error)
    console.error(error);
  
  readWrite.writeBMP(`${output}.bmp`, data,(error,data) => {
    if(error)
      console.log(error);

    console.log(`transformation has been completed! woot.`);
  });
});





// Read file path needs to be dynamic TODO: likely just a parameter that has an argument passed through from the test.(PARAMETER YES "PATH")
// indexModule.read = fs.readFile(`${__dirname}/asset/house.bmp`, (error,data) => {
//   if(error) {
//     console.error(error);
//     return;
//   }
//   transformedBitmap.greyScale(data);


  // transformedBitmap.invert(data);

  // transformedBitmap.greenRedSwitch(data);
  
  // console.log(transformedBitmapData);


