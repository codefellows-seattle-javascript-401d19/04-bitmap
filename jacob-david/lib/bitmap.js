'use strict';

const bitmapModule = module.exports = {};

bitmapModule.parseBitmap = (buffer) => {
  let parsedBitmap = {};

  const HEIGHT_OFFSET = 22;
  const PIXEL_TABLE_OFFSET = 10;
  const FILE_SIZE_OFFSET = 2;
  const HEADER_OFFSET = 22;
  const COLOR_OFFSET = 18;
  const BIT_PER_PIXEL_OFFSET = 28;
  const WIDTH_OFFSET = 18;
  const HEADER_AND_DIB_OFFSET = 54;

  parsedBitmap.buffer = buffer;

  parsedBitmap.type = buffer.toString('utf-8',0,2);
  parsedBitmap.fileSize = buffer.readUInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.headerSize = buffer.readUInt32LE(HEADER_OFFSET);
  parsedBitmap.width = buffer.readUInt32LE(WIDTH_OFFSET);
  parsedBitmap.height = buffer.readUInt32LE(HEIGHT_OFFSET);
  parsedBitmap.pixelTableOffset = buffer.readUInt32LE(PIXEL_TABLE_OFFSET);
  parsedBitmap.colorOffset = buffer.readUInt32LE(COLOR_OFFSET);
  parsedBitmap.bitPerPixelOffset = buffer.readUInt32LE(BIT_PER_PIXEL_OFFSET);
  
  return parsedBitmap.colorPalleteSection = buffer.slice(HEADER_AND_DIB_OFFSET, parsedBitmap.pixelTableOffset); 

};