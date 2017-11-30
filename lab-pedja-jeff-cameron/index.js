'use strict';

const bitmap = require('../lib/bitmap');
const fs = require('fs');

fs.readFile(`${__dirname}/__test__/assets/house.bmp`, (error, data) => {
  if(error) {
    console.error(error);
    return;
  }
  // reading bitmap file
  let parsedBitmap = bitmap.parseBitmap(data);
  console.log(parsedBitmap);

});
