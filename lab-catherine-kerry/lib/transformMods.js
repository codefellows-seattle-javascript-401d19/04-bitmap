'use strict';

const transforms = module.exports = {};

transforms.grayscale = (parsedBitmap) => {

  parsedBitmap.colorTable.forEach((value, position, array) => {

    if (position % 4 === 1) {
      parsedBitmap.colorTable.writeUInt8(array[position - 1], position);
    }
    if (position % 4 === 2) {
      parsedBitmap.colorTable.writeUInt8(array[position - 2], position);
    }
    if (position % 4 === 3) {
      parsedBitmap.colorTable.writeUInt8(array[position - 3], position);
    }
  });
  return parsedBitmap;
};

transforms.invert = (parsedBitmap) => {

  parsedBitmap.colorTable.forEach((value, position, array) => {

    if (position % 4 === 1) {
      parsedBitmap.colorTable.writeUInt8(255 - array[position], position); 
    }
    if (position % 4 === 2) {
      parsedBitmap.colorTable.writeUInt8(255 - array[position], position);
    }
    if (position % 4 === 3) {
      parsedBitmap.colorTable.writeUInt8(255 - array[position], position);
    }
  });
  return parsedBitmap;
};

transforms.random = (parsedBitmap) => {

  parsedBitmap.colorTable.forEach((value, position, array) => {
    if (position % 4 === 1) {
      parsedBitmap.colorTable.writeUInt8(Math.abs((Math.random() * 255) - array[position]), position);
    }
    if (position % 4 === 2) {
      parsedBitmap.colorTable.writeUInt8(Math.abs((Math.random() * 255) - array[position]), position);
    }
    if (position % 4 === 3) {
      parsedBitmap.colorTable.writeUInt8(Math.abs((Math.random() * 255) - array[position]), position);
    }
  });
  return parsedBitmap;  
};

