'use strict';

const bitmap = module.exports = {};

bitmap.parseBitmap = (buffer) => {
  let parsedBitmap = {};

  const HEIGHT_OFFSET = 22;
  const PIXEL_TABLE_OFFSET = 10;
  const FILE_SIZE_OFFSET = 2;

  parsedBitmap.buffer = buffer;
  // console.log(buffer);
  // vinicio - we are taking the first 2 characters because of the docs
  //           https://en.wikipedia.org/wiki/BMP_file_format
  parsedBitmap.type = buffer.toString('utf-8',0,2);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.colorTable = buffer.slice(54, 1077);
  // console.log(parsedBitmap.colorTable);
  parsedBitmap.colorTable.forEach((value, index, array) => {
    // console.log(index, value);
    // if (index % 4 === 0) console.log(index, value);
    if (index % 4 !== 0){
      // console.log(value);
      // parsedBitmap.colorTable.writeUInt8(0, index);
      // console.log(parsedBitmap.colorTable[index]);
      if (index % 4 === 1){
        parsedBitmap.colorTable.writeUInt8(array[index - 1], index);
      }
      if (index % 4 === 2){
        parsedBitmap.colorTable.writeUInt8(array[index - 2], index);
      }
      if (index % 4 === 3){
        parsedBitmap.colorTable.writeUInt8(array[index - 3], index);
      }
      // console.log(index, parsedBitmap.colorTable[index]);
    }
    // console.log(index, parsedBitmap.colorTable[index]);
  });
  console.log(parsedBitmap.colorTable);
  console.log(parsedBitmap);
  return parsedBitmap.buffer;
};
