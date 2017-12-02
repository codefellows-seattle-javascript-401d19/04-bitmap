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
  // mattL - fs.readFile creates the buffer object and returns it as data
  fs.readFile(`${__dirname}/../__test__/assets/${file}`, (err, data) => {
    if (err) throw err;

    // newly created buffer object with specific properties
    let parsedBitmap = bitmap.createBufferObject(data);
    console.log('BITMAP OBJECT:', parsedBitmap, '\n');

    // mattL - switch case to determine which transformation to use
    let transformationFileName;
    switch (transformation) {
    case ('invert'):
      transformationFileName = 'inverted';
      transform.invertColors(parsedBitmap.colorPalette);
      break;
    case ('randomize'):
      transformationFileName = 'randomized';    
      transform.randomize(parsedBitmap.colorPalette);
      break;
    case ('grayscale'):
      transformationFileName = 'grayscale';
      transform.grayscale(parsedBitmap.colorPalette);
      break;
    }

    // mattL - removing the '.<filetype>' with regex if exists so I can use any type later
    file = file.match(/.[^.]+/);
    // mattL - writing newly updated file with <transformationName>ed-<fileName> - if there's an error, .log it
    fs.writeFile(`${__dirname}/../created_files/${transformationFileName}-${file}.bmp`, parsedBitmap.buffer, err => { if (err) console.log(err); });
    fs.writeFile(`${__dirname}/../created_files/dev_information/buffer-${file}.json`, JSON.stringify(parsedBitmap.buffer), err => { if (err) console.log(err); });
    fs.writeFile(`${__dirname}/../created_files/dev_information/palette-${file}.txt`, JSON.stringify(parsedBitmap.colorPalette), err => { if (err) console.log(err); });
  
    // mattL - parsedBitmap is object containing all properties of the buffer
    if (callback) callback(parsedBitmap);
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
  parsedBitmap.colorPalette = buffer.slice(offset.COLOR_PALETTE, parsedBitmap.pixelDataTable);

  return parsedBitmap;
};

transform.invertColors = (colorPalette) => {
  for (let i = 0; i < colorPalette.length; i += 4) {
    colorPalette.fill(
      255-colorPalette[i],
      i, i+1);   // buffer.fill(value[, offset[, end]][, encoding])
  }

  for (let i = 1; i < colorPalette.length; i +=4) {
    colorPalette.fill(255-colorPalette[i], i, i+1);
  }

  for (let i = 2; i < colorPalette.length; i +=4) {
    colorPalette.fill(255-colorPalette[i], i, i+1);
  }
};

transform.randomize = (colorPalette) => {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  
  for (let i = 0; i < colorPalette.length; i += 4) {
    colorPalette.fill(blue - colorPalette[i], i, i+1);
  }

  for (let i = 1; i < colorPalette.length; i += 4) {
    colorPalette.fill(green - colorPalette[i], i, i+1);
  }

  for (let i = 2; i < colorPalette.length; i += 4) {
    colorPalette.fill(red - colorPalette[i], i, i+1);
  }
};

transform.grayscale = (colorPalette) => {
  // Red=30%, Green=59%, Blue=11% --- https://www.gimp.org/tutorials/Color2BW/#channelmixer
  for (let i = 0; i < colorPalette.length; i += 4) {
    colorPalette.fill(
      (colorPalette[i]*.11) + 
      (colorPalette[i+1]*.59) + 
      (colorPalette[i+2])*.30, 
      i, i+3);
  }
};