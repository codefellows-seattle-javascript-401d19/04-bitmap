'use strict';

const bitmap = require('./lib/bitmap');
const fs = require('fs');
const image = 'house.bmp';
// const myArgs = process.argv.slice();
const transform = require('./lib/transformMods');


fs.readFile(`${__dirname}/__test__/asset/${image}`, (error,data) => {
  if(error)
  {
    console.error(error);
    return;
  }

  let parsedBitmap = bitmap.parseBitmap(data);
  transform.grayscale(parsedBitmap);
  transform.invert(parsedBitmap);
  transform.random(parsedBitmap);


  fs.writeFile(`${__dirname}/__test__/asset/test${image}`, parsedBitmap.buffer, error => {
    if(error)
    {
      console.error(error);
      return;
    }
    console.log('written');
  });
});

