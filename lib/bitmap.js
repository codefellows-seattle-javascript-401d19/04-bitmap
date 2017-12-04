'use strict';

const bitmap = module.exports = {};

bitmap.parsedBitmaps = [];

bitmap.parseBitmap = (buffer) => {
  let parsedBitmap = {}; //keep track of buffer no matter what
  const FILE_TYPE_OFFSET = 0;
  const FILE_TYPE_LENGTH = 2;
  const FILE_SIZE_OFFSET = 2;
  const PIXEL_TABLE_OFFSET = 10;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_LENGTH_OFFSET = 46;
  const PIXEL_SIZE_OFFSET = 28;
  parsedBitmap.buffer = buffer;
  //we are taking the first 2 characters because of the docs
  parsedBitmap.type = buffer.toString('utf-8', FILE_TYPE_OFFSET, FILE_TYPE_LENGTH);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET); //size of fileSize
  parsedBitmap.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);//10 bytes in 4 bytes which is 32 bits in- 8 bits in a byte
  parsedBitmap.heightOffset = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.colorTable = buffer.readInt32LE(COLOR_TABLE_OFFSET);
  parsedBitmap.slicedColorTable = buffer.slice(54,1078);
  parsedBitmap.colorTableAmount = buffer.readInt32LE(COLOR_TABLE_LENGTH_OFFSET);
  parsedBitmap.pixelSize = buffer.readInt16LE(PIXEL_SIZE_OFFSET);
  if(parsedBitmap.colorTableAmount===0)
    parsedBitmap.colorTableAmount = Math.pow(2, parsedBitmap.pixelSize);

  return parsedBitmap;
};
