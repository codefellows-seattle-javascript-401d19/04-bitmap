'use strict';

const bitmap = module.exports = {};


bitmap.parseBitmap = (buffer) => {
    let parsedBitmap = {};
  
    const HEIGHT_OFFSET = 22;
    const PIXEL_TABLE_OFFSET = 10;
    const FILE_SIZE_OFFSET = 2;
  
    parsedBitmap.buffer = buffer;
    parsedBitmap.type = buffer.toString('utf-8',0,2);
    parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
    parsedBitmap.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
    parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
    parsedBitmap.colorTable = buffer.slice(54, 1077);
    parsedBitmap.colorTable.forEach((value, position, array) => {
  
      if(position % 4 === 1) {
        parsedBitmap.colorTable.writeUInt8(array[position-1], position);    
      }
      if (position % 4 === 2) {
        parsedBitmap.colorTable.writeUInt8(array[position - 2], position);
      }
      if (position % 4 === 3) {
        parsedBitmap.colorTable.writeUInt8(array[position - 3], position);
      }
    });
    console.log(parsedBitmap.colorTable = buffer.slice(57, 1077));
    console.log(parsedBitmap);
    return parsedBitmap;
  };