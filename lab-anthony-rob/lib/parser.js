'use strict';

// added constants so there are no 'magic' numbers
const FILESIZE_OFFSET = 2;
const PIXEL_ARRAY_LOCATION_OFFSET = 10;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const COLOR_TABLE_OFFSET = 54;

module.exports = (buffer) => {
  const bufferData = {
    buffer: buffer,
    type: buffer.toString('utf-8', 0,2),
    filesize: buffer.readInt32LE(FILESIZE_OFFSET),
    pixelArrayOffset: buffer.readInt32LE(PIXEL_ARRAY_LOCATION_OFFSET),
    width: buffer.readInt32LE(WIDTH_OFFSET),
    height: buffer.readInt32LE(HEIGHT_OFFSET),
  };
  bufferData.colorPalleteBuffer = buffer.slice(COLOR_TABLE_OFFSET, bufferData.pixelArrayOffset);
  // might need to subtract 2 from pixelArrayOffset
  return bufferData;
};
