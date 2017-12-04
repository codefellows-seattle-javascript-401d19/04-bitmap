#!/usr/bin/env node
'use strict';

const fs = require('fs');
const program = require('commander');
const bitmap = require('./lib/bitmap');
// let files = fs.readdirSync('./__test__/assets/');

program.arguments('<file_location> <invert|grayscale|random> <file_destination>')
  .action((fileLocation, transformationType, fileDestination) => {
    console.log(`${fileLocation} - ${transformationType} - ${fileDestination}`);
  })
  .parse(process.argv);




// bitmap.bufferFile(files[3], 'random');

// for (let i in files) {
//   bitmap.bufferFile(files[i], 'random');
// }