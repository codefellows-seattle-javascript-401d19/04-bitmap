'use strict';

const flipColors = module.exports = {};

flipColors.transform = parsedBuffer => {
  if (parsedBuffer.pixelTableOffset === 54){
    for (let i = 54; i < parsedBuffer.buffer.length; i++){
      let inverse = 255 - parsedBuffer.buffer[i];
      parsedBuffer.buffer.writeUInt8(inverse, i);
    }
  } else {
    parsedBuffer.colorTable.forEach((value, index) => {
      parsedBuffer.colorTable.writeUInt8((255 - value), index);
    });
  }
  return parsedBuffer;
};
