'use strict';

const bitmap = require('./lib/bitmap');
const transform = require('./lib/transformMods');
const fs = require('fs');
const infile = process.argv[2];
const outfile = process.argv[3];
const myArgs = process.argv.slice(4);


fs.readFile(`${__dirname}/__test__/asset/${infile}`, (error,data) => {
  if(error)
  {
    console.error(error);
    return;
  }

  let parsedBitmap = bitmap.parseBitmap(data);

  switch (myArgs[0]) {
  case 'grayscale':
    transform.grayscale(parsedBitmap);
    console.log(`a grayscale image has been created at ${outfile}.`);
    break;
  case 'invert':
    transform.invert(parsedBitmap);
    console.log(`an inverted image has been created at ${outfile}.`);
    break;
  case 'random':
    transform.random(parsedBitmap);
    console.log(`a randomized image has been created at ${outfile}.`);
    break;
  default:
    console.log('Sorry, you did not list a valid transform method');
  }

  fs.writeFile(`${__dirname}/__test__/asset/${outfile}`, parsedBitmap.buffer, error => {
    if(error)
    {
      console.error(error);
      return;
    }
    console.log('Congratulations, your photo file has been written!');
  });
});

