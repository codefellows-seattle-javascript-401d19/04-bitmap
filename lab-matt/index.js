#!/usr/bin/env node
'use strict';

const program = require('commander');
const bitmap = require('./lib/bitmap');

program.arguments('<file_location> <invert|grayscale|random> <file_destination>')
  .action((fileLocation, transformationType, fileDestination) => {
    // console.log(`${fileLocation} - ${transformationType} - ${fileDestination}`);
    bitmap.bufferFile(fileLocation, transformationType, fileDestination);
  })
  .parse(process.argv);


// bitmap.bufferFile(`${__dirname}/__test__/assets/house.bmp`, 'random', `${__dirname}/created_files/`);

// // mattL - runs through each file in a given folder for the transformation
// let files = fs.readdirSync('./__test__/assets/');

// for (let i in files) {
//   bitmap.bufferFile(`${__dirname}/__test__/assets/${files[i]}`, 'random', `${__dirname}/created_files/`); 
// }