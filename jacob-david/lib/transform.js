'use strict';

const transformedBitmap = module.exports = {};
const bitmap = require('./bitmap');


// TODO: pass in the callback next to the buffer
transformedBitmap.invertColors = (buffer) => {
  


  let parsedBitmap = bitmap.parseBitmap(buffer);
  console.log('====================================');
  console.log(...parsedBitmap);
  
  console.log('====================================');  

  // transformedBitmap.color = buffer.fill(97);
  
  // return transformedBitmap;
};
    