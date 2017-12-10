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
    callback(new Error('READ-WRITE : must provide a valid path!'));

  fs.readFile(`${__dirname}/../asset/${bmpPath}`, (error,bitmapFile) => {
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

readWrite.writeBMP = (bmpPath, parsedBitmap, callback) => {

  if(!bmpPath)
    callback(new Error('READ-WRITE : must provide a valid path'));
  
  if(!parsedBitmap || !Buffer.isBuffer(parsedBitmap.buffer))
    callback(new Error('READ-WRITE : must provide a valid parsed Bitmap'));
  
  fs.writeFile(`${__dirname}/../asset/${bmpPath}`, parsedBitmap.buffer, (error,data) => {
    if(error)
      callback(error);

    if(callback)
      callback(null,data);
    
    return null;
  });
};