import { start } from "repl";

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

  //TODO: find where colors start and how to access
  //TODO: find where pixels start

  return parsedBitmap;
};