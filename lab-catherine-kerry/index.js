'use strict';

const bitmap = require('./lib/bitmap');
const fs = require('fs');
let image = 'house.bmp';

fs.readFile(`${__dirname}/__test__/asset/${image}`, (error,data) => {
  if(error)
  {
    console.error(error);
    return;
  }

  let parsedBitmap = bitmap.parseBitmap(data);
  console.log(parsedBitmap);

  fs.writeFile(`${__dirname}/__test__/asset/test${image}`, data, error => {
    if(error)
    {
      console.error(error);
      return;
    }
  });
});

