'use strict';

const bitmap = module.exports = {};

bitmap.parseBitmap = buffer => {
  let parsedBitmap = {};

  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const FILE_SIZE_OFFSET = 2;
  const PIXEL_TABLE_OFFSET = 10;
  const COLOR_DEPTH_OFFSET = 28;
  const NUM_COLORS_OFFSET = 46;

  parsedBitmap.buffer = buffer;
  parsedBitmap.type = buffer.toString('utf-8',0,2);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.colorDepth = buffer.readUInt16LE(COLOR_DEPTH_OFFSET);
  parsedBitmap.numColors = buffer.readUInt32LE(NUM_COLORS_OFFSET);
  parsedBitmap.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
  parsedBitmap.width = buffer.readInt32LE(WIDTH_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.colorTable = buffer.slice(54, parsedBitmap.pixelTableOffset);

  return parsedBitmap;
};
