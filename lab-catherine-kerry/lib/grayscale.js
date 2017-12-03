'use strict';

const grayscale = module.exports = {};

grayscale.parsedBitmap = (buffer) => {
  let parsedBitmap = {};

  parsedBitmap.colorTable.forEach((value, position, array) => {

    if (position % 4 === 1) {
      parsedBitmap.colorTable.writeUInt8((array[position - 1]), position);
    }
    if (position % 4 === 2) {
      parsedBitmap.colorTable.writeUInt8((array[position - 2]), position);
      console.log(parseInt(array[position - 2]));
    }
    if (position % 4 === 3) {
      parsedBitmap.colorTable.writeUInt8((array[position - 3]), position);
    }



  });
  return parsedBitmap;

};