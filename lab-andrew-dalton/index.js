#!/usr/bin/env node
'use strict';


const index = {};

const bitmap = require('./lib/bitmap');
const bwTransform = require('./lib/bwtransform');
const flipColors = require('./lib/flipcolors');
const addContrast = require('./lib/addcontrast');
const randomColors = require('./lib/randomcolors');
const help = require('./lib/help');
const fs = require('fs');

let file = process.argv[2];
let saveLoc = process.argv[3];
let command = process.argv[4];

index.bwTransformer = () => {
  fs.readFile(file, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let bwTransformed = bwTransform.transform(parsedBitmap);
    fs.writeFile(saveLoc, bwTransformed.buffer, error => {
      if (error){
        console.error(error);
        return;
      }
    });
  });
};

index.flipColors = () => {
  fs.readFile(file, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let flippedColors = flipColors.transform(parsedBitmap);
    fs.writeFile(saveLoc, flippedColors.buffer, error => {
      if (error){
        console.error(error);
        return;
      }
    });
  });
};

index.addContrast = () => {
  fs.readFile(file, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let addedContrast = addContrast.transform(parsedBitmap);
    fs.writeFile(saveLoc, addedContrast.buffer, error => {
      if (error){
        console.error(error);
        return;
      }
    });
  });
};

index.randomColors = () => {
  fs.readFile(file, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let randomizedColors = randomColors.transform(parsedBitmap);
    fs.writeFile(saveLoc, randomizedColors.buffer, error => {
      if (error){
        console.error(error);
        return;
      }
    });
  });
};
// process.argv.forEach((e, i) => {
//   console.log(`${i}: ${e}`);
// });
let errorCounter = 0;

if (process.argv.length === 3 && process.argv[2] === 'help') help.help();
if (process.argv.length > 5) console.log('invalid syntax, type \'bmptransform help\' for more info');
if (file.slice(-3) !== 'bmp' || saveLoc.slice(-3) !== 'bmp') {
  errorCounter++;
  console.log(file, saveLoc);
  console.log('you must specify a \'.bmp\' as both the file to read and the file to save');
}

if (errorCounter < 1) {
  if (command === 'addcontrast') index.addContrast();
  if (command === 'bwtransform') index.bwTransformer();
  if (command === 'flipcolors') index.flipColors();
  if (command === 'randomcolors') index.randomColors();
  else console.log('type \'bmptransform help\' for available transform types');
}
