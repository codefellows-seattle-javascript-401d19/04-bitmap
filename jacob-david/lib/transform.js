'use strict';

const transform = module.exports = {};
const parsedData = require('./lib/bitmap');

transform.invertColors = (buffer) => {
  let transformedBitmap = {};

  
    
  transformedBitmap.color = buffer.fill(97);
  

  return transformedBitmap;
};
    