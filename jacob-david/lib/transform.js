'use strict';

const transformedBitmap = module.exports = {};

const bitmap = require('./bitmap');

//need to create an object from the incoming one and change the colorpallete section for each transform then send then send only the complete new object

// TODO: pass in the callback next to the buffer
transformedBitmap.greyScale = (bitmap,callback) => {
  // let parsedBitmapArray = bitmap.parseBitmap(buffer);
  
  if(!bitmap || !Buffer.isBuffer(bitmap.buffer))
    callback(new Error(`must provide a valid buffer`));

  for (let i = 0; i < bitmap.colorPalleteSection.length; i += 4) {
    
    bitmap.colorPalleteSection[i] = Math.abs(255 - bitmap.colorPalleteSection[i]);
    bitmap.colorPalleteSection[i + 1] = Math.abs(255 - bitmap.colorPalleteSection[i + 1]);
    bitmap.colorPalleteSection[i + 2] = Math.abs(255 - bitmap.colorPalleteSection[i + 2]);
    
    // let grey = Math.floor((parsedBitmapArray[i-3] + parsedBitmapArray[i-2] + parsedBitmapArray[i-1])/3); 
    // parsedBitmapArray[i-3] = grey;
    // parsedBitmapArray[i-2] = grey;
    // parsedBitmapArray[i-1] = grey;
    // console.log('====================================');
    // console.log(...parsedBitmapArray);
    // console.log('====================================');
  }  
  console.log('perform inverted transformation');
  if(callback)
    callback(null,bitmap);
  // return transformedBitmap.greyScale();
};


// transformedBitmap.inverted = (buffer) => {
//   let parsedBitmapArray = bitmap.parseBitmap(buffer);
  
//   for (let i = 0; i < parsedBitmapArray.length; i+=4) {
//     const element = parsedBitmapArray[i];
//     let grey = (element[i-3] + element[i-2] + element[i-1])/3;
//     element[i-3] = grey;
//     element[i-2] = grey;
//     element[i-1] = grey;
//   }  
//   // return transformedBitmap.greyScale;
// };
  