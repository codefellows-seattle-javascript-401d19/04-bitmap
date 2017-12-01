'use strict';

const transform = module.exports = {};
const parsedData = require('./lib/bitmap');

// TODO: pass in the callback next to the buffer
transform.invertColors = (buffer) => {
  let transformedBitmap = {};

  // TODO: write a for loop using the length of the color table, use write to make changes, incrememnt in factor of 4  (4  bytes at a time)
    
  // this is just test code, not sure if it works
  transformedBitmap.color = buffer.fill(97);
  

  return transformedBitmap;
};
    