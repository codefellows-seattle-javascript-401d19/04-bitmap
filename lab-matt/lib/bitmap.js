'use strict';

const bitmap = module.exports = {};
const fs = require('fs');
const transform = {};

// ------------ TEST ----------------
bitmap.helloWorld = () => {
  return 'life';
};

// -------------- CODE ------------------
bitmap.bufferFile = (file, transformation, callback) => {
  fs.readFile(`${__dirname}/../__test__/assets/${file}`, (err, data) => {
    if (err) throw err;

    let parsedBitmap = bitmap.createBufferObject(data);

    switch (transformation) {
    case ('invert'): 
      transform.invertColors(parsedBitmap.colorPalette);
      break;
    }


    fs.writeFile(`${__dirname}/../new_files/${transformation}ed-${file}`, parsedBitmap.buffer, err => console.log('bitmap.js~57_error:', err));
    fs.writeFile('output.json', JSON.stringify(parsedBitmap.buffer), err => console.log('bitmap.js~58_error:', err));
    fs.writeFile('output.txt', JSON.stringify(parsedBitmap.colorPalette), err => console.log('bitmap.js~59_error:', err));
  
  
    // mattL - parsedBitmap is object containing all properties of the buffer
    console.log('\n BITMAP OBJECT', parsedBitmap, '\n');
    callback(null, null, parsedBitmap);
  });
};

bitmap.createBufferObject = (buffer) => {
  let parsedBitmap = {};
  let offset = {};

  offset = {
    FILE_SIZE: 2,
    PIXEL_DATA_TABLE: 10,
    HEADER_SIZE: 14,
    PIXEL_WIDTH: 18,
    PIXEL_HEIGHT: 22,
    BITS_PER_PIXEL: 28,
    COLOR_PALETTE: 54,
  };

  parsedBitmap.buffer = buffer;
  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(offset.FILE_SIZE);
  parsedBitmap.pixelDataTable = buffer.readInt32LE(offset.PIXEL_DATA_TABLE);
  parsedBitmap.headerSize = buffer.readInt32LE(offset.HEADER_SIZE);
  parsedBitmap.width = buffer.readInt32LE(offset.PIXEL_WIDTH);
  parsedBitmap.height = buffer.readInt32LE(offset.PIXEL_WIDTH);
  parsedBitmap.bitsPerPixel = buffer.readInt8(offset.BITS_PER_PIXEL);

  // offset.COLOR_PALETTE = (offset.HEADER_SIZE + parsedBitmap.headerSize);

  parsedBitmap.colorPalette = buffer.slice(offset.COLOR_PALETTE, parsedBitmap.pixelDataTable);
  console.log('\nOLD COLOR PALETTE', parsedBitmap.colorPalette, '\n');
  // parsedBitmap.newBuffer = transform.invertColors(parsedBitmap.colorPalette);

  // transform.invertColors(parsedBitmap.colorPalette);
  
  console.log('NEW COLOR PALETTE', parsedBitmap.colorPalette, '\n');
  console.log('\nNEW BUFFER', parsedBitmap.buffer, '\n');
  

  
  
  
  // fs.writeFile('output.bmp', parsedBitmap.buffer, err => console.log('bitmap.js~57_error:', err));
  // fs.writeFile('output.json', JSON.stringify(parsedBitmap.buffer), err => console.log('bitmap.js~58_error:', err));
  // fs.writeFile('output.txt', JSON.stringify(parsedBitmap.colorPalette), err => console.log('bitmap.js~59_error:', err));
  

  return parsedBitmap;
};

transform.invertColors = (colorPalette) => {
  // buf.fill(value[, offset[, end]][, encoding])
  
  for (let i = 1; i < colorPalette.length; i += 4) {
    colorPalette.fill(255-colorPalette[i], i, i+1);
  }

  for (let i = 2; i < colorPalette.length; i +=4) {
    colorPalette.fill(255-colorPalette[i], i, i+1);
  }

  for (let i = 3; i < colorPalette.length; i +=4) {
    colorPalette.fill(255-colorPalette[i], i, i+1);
  }
};
