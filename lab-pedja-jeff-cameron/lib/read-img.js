'use strict';

const readImg = module.exports = {};
const fs = require('fs');

readImg.getFile = (inputFilePath, callback) => {

  const HEIGHT_OFFSET = 22;
  const PIXEL_TABLE_OFFSET = 10;
  const FILE_SIZE_OFFSET = 2;
  const DIB_HEADER = 14;

  fs.readFile(inputFilePath, (error, data) => {
    if(error) {
      callback(error);
      return;
    }

    function ConstructBitmap(buffer) {
      this.buffer = buffer;
      this.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
      this.type = buffer.toString('utf-8',0,2);
      this.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
      this.height = buffer.readInt32LE(HEIGHT_OFFSET);
      this.dibHeader = buffer.readInt32LE(DIB_HEADER);
      this.colorTable = buffer.slice(53, this.pixelTableOffset-1);
    }

    const constructedBitmap = new ConstructBitmap(data);
    callback(null, constructedBitmap);
  });
};
