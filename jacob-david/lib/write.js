'use strict';

const useIndex = require(`../index`);
const fs = require('fs');
const bitmap = require('./bitmap');
const transform = require('./transform');

const readWrite = module.exports = {};

// useIndex.read.fs.writeFile('NEWHOUSE.bmp',data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

readWrite.readBMP = (bmpPath, transform, callback) => {
  if(!bmpPath)
    callback(new Error('must provide a valid path'));

  fs.readFile(`${__dirname}/../assets/${bmpPath}`, (error,bitmapFile) => {
    if(error){
      callback(error);      
      console.error(error);
    }
    console.log('read source bmp');

    if(callback){
      transform[transform](bitmap.parseBitmap(bitmapFile),callback);
    }
  });
};