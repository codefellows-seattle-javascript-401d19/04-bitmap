'use strict';

const readImg = module.exports = {};
const fs = require('fs');

readImg.getFile = (inputFilePath) => {

  const HEIGHT_OFFSET = 22;
  const PIXEL_TABLE_OFFSET = 10;
  const FILE_SIZE_OFFSET = 2;
  const HEADER_HEIGHT = 0;
  const DIB_HEADER = 14;

  fs.readFile(inputFilePath, (error, data) => {
    if(error) {
      console.error(error);
      return;
    }
    // let parsedBitmap = bitmap.parseBitmap(data);
    // console.log(parsedBitmap);

    function ConstructBitmap(buffer) {
      this.buffer = buffer;
      this.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
      this.type = buffer.toString('utf-8',0,2);
      this.headerHeight = buffer.readInt32LE(HEADER_HEIGHT);
      this.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
      this.height = buffer.readInt32LE(HEIGHT_OFFSET);
      this.dibHeader = buffer.readInt32LE(DIB_HEADER);
      this.colorTable = buffer.slice(this.headerHeight+this.dibHeader, this.pixelTableOffset-1);
      // this.colorTable = buffer.toString('utf-8', 257, 821)
    }

    var constructedBitmap = new ConstructBitmap(data);

    console.log(constructedBitmap);
  });

};
