'use strict';

const bitmap = module.exports = {};
const fs = require('fs');

// ------------ TEST ----------------
bitmap.helloWorld = () => {
  return 'life';
};

// -------------- CODE ------------------
bitmap.bufferFile = (file, callback) => {
  fs.readFile(`${__dirname}/../__test__/assets/${file}`, (err, data) => {
    if (err) throw err;

    // mattL - data is the returned buffer format of the file
    // console.log(data);

    let parsedBitmap = bitmap.createBufferObject(data);

    // mattL - parsedBitmap is object containing all properties of the buffer
    console.log(parsedBitmap);
    callback(null, parsedBitmap);
  });
};

bitmap.createBufferObject = (buffer) => {
  let parsedBitmap = {};
  let offset = {};

  offset.FILE_SIZE = 2;
  offset.PIXEL_DATA_START = 10;
  offset.HEADER_SIZE = 14;
  offset.PIXEL_WIDTH = 18;
  offset.PIXEL_HEIGHT = 22;
  offset.BITS_PER_PIXEL = 28;
  offset.COMPRESSION_USED = 30;

  parsedBitmap.buffer = buffer;
  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(offset.FILE_SIZE);
  parsedBitmap.pixelDataStart = buffer.readInt32LE(offset.PIXEL_DATA_START);
  parsedBitmap.headerSize = buffer.readInt32LE(offset.HEADER_SIZE);
  parsedBitmap.width = buffer.readInt32LE(offset.PIXEL_WIDTH);
  parsedBitmap.height = buffer.readInt32LE(offset.PIXEL_WIDTH);
  parsedBitmap.bitsPerPixel = buffer.readInt8(offset.BITS_PER_PIXEL);
  parsedBitmap.compressionUsed = buffer.readInt32LE(offset.COMPRESSION_USED);
  
  
  

  return parsedBitmap;
};


// bitmap.parseBitmap = (buffer) => {
//   let parsedBitmap = {};

//   const HEIGHT_OFFSET = 22;
//   const PIXEL_TABLE_OFFSET = 10;
//   const FILE_SIZE_OFFSET = 2;

//   parsedBitmap.buffer = buffer;
//   // vinicio - we are taking the first 2 characters because of the docs
//   //           https://en.wikipedia.org/wiki/BMP_file_format
//   parsedBitmap.type = buffer.toString('utf-8',0,2);
//   parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
//   parsedBitmap.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
//   parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
//   return parsedBitmap;
// };