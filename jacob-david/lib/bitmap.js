'use strict';

const bitmap = module.exports = {};

bitmap.parseBitmap = (buffer) => {
  let parsedBitmap = {};

  const HEIGHT_OFFSET = 22;
  const PIXEL_TABLE_OFFSET = 10;
  const FILE_SIZE_OFFSET = 2;
  const HEADER_OFFSET = 22;
  const COLOR_OFFSET = 18;
  const BIT_PER_PIXEL_OFFSET = 28;
  const WIDTH_OFFSET = 18;

  parsedBitmap.buffer = buffer;

  parsedBitmap.type = buffer.toString('utf-8',0,2);
  parsedBitmap.fileSize = buffer.readUInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.pixelTableOffset = buffer.readUInt32LE(PIXEL_TABLE_OFFSET);
  parsedBitmap.height = buffer.readUInt32LE(HEIGHT_OFFSET);
  parsedBitmap.headerSize = buffer.readUInt32LE(HEADER_OFFSET);
  parsedBitmap.colorOffset = buffer.readUInt32LE(COLOR_OFFSET);
  parsedBitmap.bitPerPixelOffset = buffer.readUInt32LE(BIT_PER_PIXEL_OFFSET);
  parsedBitmap.width = buffer.readUInt32LE(WIDTH_OFFSET);

  //TODO: find where colors start and how to access
  //TODO: find where pixels start

  return parsedBitmap;
};