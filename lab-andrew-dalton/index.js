#!/usr/bin/env node
'use strict';


const index = {};

const bitmap = require('./lib/bitmap');
const bwTransform = require('./lib/bwtransform');
const flipColors = require('./lib/flipcolors');
const addContrast = require('./lib/addcontrast');
const randomColors = require('./lib/randomcolors');
const fs = require('fs');

let file = 'non-palette-bitmap.bmp';

(index.bwTransformer = () => {
  fs.readFile(`${__dirname}/__test__/assets/${file}`, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let bwTransformed = bwTransform.transform(parsedBitmap);
    fs.writeFile(`${__dirname}/__test__/assets/test-${file}`, bwTransformed.buffer, error => {
      if (error){
        console.error(error);
        return;
      }
    });
  });
});

(index.flipColors = () => {
  fs.readFile(`${__dirname}/__test__/assets/${file}`, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let flippedColors = flipColors.transform(parsedBitmap);
    fs.writeFile(`${__dirname}/__test__/assets/test-${file}`, flippedColors.buffer, error => {
      if (error){
        console.error(error);
        return;
      }
    });
  });
});

(index.addContrast = () => {
  fs.readFile(`${__dirname}/__test__/assets/${file}`, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let addedContrast = addContrast.transform(parsedBitmap);
    fs.writeFile(`${__dirname}/__test__/assets/test-${file}`, addedContrast.buffer, error => {
      if (error){
        console.error(error);
        return;
      }
    });
  });
});

(index.randomColors = () => {
  fs.readFile(`${__dirname}/__test__/assets/${file}`, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let randomizedColors = randomColors.transform(parsedBitmap);
    fs.writeFile(`${__dirname}/__test__/assets/test-${file}`, randomizedColors.buffer, error => {
      if (error){
        console.error(error);
        return;
      }
    });
  });
});
console.log('hello!');
