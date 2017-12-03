'use strict';

const FILE_SIZE_OFFSET = 2;
const PIXEL_ARRAY_LOCATION_OFFSET = 10;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const COLOR_TABLE_OFFSET = 54;

module.exports = (buffer) => {
  const bufferData = {
    buffer: buffer,
    type: buffer.toString('utf-8', 0,2),
    fileSize: buffer.readInt32LE(FILE_SIZE_OFFSET),
    pixelArrayOffset: buffer.readInt32LE(PIXEL_ARRAY_LOCATION_OFFSET),
    width: buffer.readInt32LE(WIDTH_OFFSET),
    height: buffer.readInt32LE(HEIGHT_OFFSET),
  };
  bufferData.colorPaletteBuffer = buffer.slice(COLOR_TABLE_OFFSET, bufferData.pixelArrayOffset);
  //rob - from the docs, assumes 8bit color
  bufferData.pixelArraySize = (Math.floor((8 * bufferData.width + 31) / 32) * 4) * bufferData.height;
  bufferData.pixelArrayBuffer = buffer.slice(bufferData.pixelArrayOffset, bufferData.pixelArrayOffset + bufferData.pixelArraySize);

  return bufferData;
};
