'use strict';

module.exports = (buffer) => {
  const bufferData = {
    buffer: buffer,
    type: buffer.toString('utf-8', 0,2),
    filesize: buffer.readInt32LE(2),
    pixelTableOffset: buffer.readInt32LE(10),
    height: buffer.readInt32LE(22),
  };
  return bufferData;
};
