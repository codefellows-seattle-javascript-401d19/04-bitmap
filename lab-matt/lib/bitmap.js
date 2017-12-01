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

    let parsedBitmap = bitmap.createModule(data);

    // mattL - parsedBitmap is object containing all properties of the buffer
    console.log(parsedBitmap);
    callback(null, parsedBitmap);
  });
};

bitmap.createModule = (buffer) => {
  let parsedBitmap = {};


  parsedBitmap.buffer = buffer;

  return parsedBitmap;
};
