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

  parsedBitmap.buffer = buffer;
  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(offset.FILE_SIZE);
  parsedBitmap.pixelDataStart = buffer.readInt32LE(offset.PIXEL_DATA_START);
  parsedBitmap.headerSize = buffer.readInt32LE(offset.HEADER_SIZE);
  parsedBitmap.width = buffer.readInt32LE(offset.PIXEL_WIDTH);
  parsedBitmap.height = buffer.readInt32LE(offset.PIXEL_WIDTH);
  parsedBitmap.bitsPerPixel = buffer.readInt8(offset.BITS_PER_PIXEL);
  parsedBitmap.newBuffer = sizeTwoHundred(buffer);
  
  
  
  fs.writeFile('output.bmp', parsedBitmap.newBuffer, err => console.log(err));
  fs.writeFile('output.json', JSON.stringify(parsedBitmap.buffer), err => console.log(err));
  

  return parsedBitmap;
};

let sizeTwoHundred = (buffer) => {
  // return buffer.writeUInt32LE(100, 18);
  return buffer;
  
  
};