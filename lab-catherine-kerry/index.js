'use strict';

const bitmap = require('./lib/transformMods');
const fs = require('fs');
const image = 'house.bmp';
// const myArgs = process.argv.slice();


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

