'use strict';

const bitmap = require('./lib/bitmap');
const transform = require('./lib/transformMods');
const fs = require('fs');
const image = 'house.bmp';
const infile = process.argv[2];
const outfile = process.argv[3];
const myArgs = process.argv.slice(4);


fs.readFile(`${__dirname}/__test__/asset/${image}`, (error,data) => {
  if(error)
  {
    console.error(error);
    return;
  }

  let parsedBitmap = bitmap.parseBitmap(data);

  switch (myArgs[0]) {
  case 'grayscale':
    transform.grayscale(parsedBitmap);
    console.log(myArgs[1], 'a grayscale image has been created.');
    break;
  case 'invert':
    transform.invert(parsedBitmap);
    console.log(myArgs[1], 'an inverted image has been created.');
    break;
  case 'random':
    transform.random(parsedBitmap);
    console.log(myArgs[1], 'a random image has been created.');
    break;
  default:
    console.log('Sorry, you did not list a valid transform method');
  }

  fs.writeFile(`${__dirname}/__test__/asset/test${image}`, parsedBitmap.buffer, error => {
    if(error)
    {
      console.error(error);
      return;
    }
    console.log('Congratulations, your photo file has been written!');
  });
});

