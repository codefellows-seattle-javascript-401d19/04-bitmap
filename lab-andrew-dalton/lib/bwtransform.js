'use strict';

const bwTransform = module.exports = {};

bwTransform.transform = parsedBuffer => {
  if (parsedBuffer.pixelTableOffset === 54){
    let rowLength = parsedBuffer.width * (parsedBuffer.colorDepth / 8);
    let padding = 0;
    if (rowLength % 4 !== 0){
      padding = 4 - (rowLength % 4);
    }
    for (let i = 54; i < parsedBuffer.buffer.length; i += 3){
      if (i !== 54 && (i - 54) % rowLength === 0) i += padding;
      parsedBuffer.buffer.writeUInt8(parsedBuffer.buffer[i], i + 1);
      parsedBuffer.buffer.writeUInt8(parsedBuffer.buffer[i], i + 2);
    }
  } else {
    parsedBuffer.colorTable.forEach((value, index, array) => {
      if (index % 4 === 0){
        parsedBuffer.colorTable.writeUInt8(index / 4, index);
      }
      if (index % 4 === 1){
        parsedBuffer.colorTable.writeUInt8(array[index - 1], index);
      }
      if (index % 4 === 2){
        parsedBuffer.colorTable.writeUInt8(array[index - 2], index);
      }
    });
  }
  return parsedBuffer;
};
