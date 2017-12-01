'use strict';

const bitmap = require('./lib/bitmap');
const fs = require('fs');

fs.readFile(`${__dirname}/__test__/asset/house.bmp`, (error,data) => {
  if(error)
  {
    console.error(error);
    return;
  }

  let parsedBitmap = bitmap.parseBitmap(data);
  console.log(parsedBitmap);
});