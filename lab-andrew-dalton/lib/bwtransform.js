'use strict';

const bwtransform = module.exports = {};

bwtransform.transform = buffer => {
  if (buffer.pixelTableOffset === 54){
    //stuff
  } else {
    buffer.colorTable.forEach((value, index, array) => {
      // console.log(index, value);
      // if (index % 4 === 0) console.log(index, value);
      if (index % 4 !== 0){
        // console.log(value);
        // if (index % 4 === 2){
        //   parsedBitmap.colorTable.writeUInt8(array[index - 1], index);
        // }
        // if (index % 4 === 3){
        //   parsedBitmap.colorTable.writeUInt8(array[index - 2], index);
        // }
        // console.log(parsedBitmap.colorTable[index]);
        if (index % 4 === 1){
          buffer.colorTable.writeUInt8(array[index - 1], index);
        }
        if (index % 4 === 2){
          buffer.colorTable.writeUInt8(array[index - 2], index);
        }
        if (index % 4 === 3){
          buffer.colorTable.writeUInt8(array[index - 3], index);
        }
        // console.log(index, parsedBitmap.colorTable[index]);
      }
    });
  }
  return buffer;
};
