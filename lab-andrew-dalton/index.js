'use strict';

// let stringBuffer = Buffer('The Hound');

// console.log(`Buffer as a string: ${stringBuffer.toString()}`);
// console.log(`Buffer as hex`);
// console.log(stringBuffer);

// console.log('Extracting only one character');
// console.log(stringBuffer.readUInt8(0));
// console.log(stringBuffer.readUInt16LE(0));

// console.log(stringBuffer.readUInt16LE(0));
// console.log(stringBuffer.readUInt32LE(0));

// console.log(stringBuffer.toString('hex'));
// console.log(stringBuffer.toString('base64',0,1));

// let fromBase64 = Buffer.from('VA==','base64');
// console.log(fromBase64.toString());

//vinicio - reading the first 16 bytes of a number

// stringBuffer.fill(97);
//
// stringBuffer.writeUInt8(97,2);// vinicio - 2 is not the size
// console.log(stringBuffer);
// console.log(stringBuffer.toString());
//
// stringBuffer.write('and');
// console.log(stringBuffer);
// console.log(stringBuffer.toString());

const index = {};

const bitmap = require('./lib/bitmap');
const bwTransform = require('./lib/bwtransform');
const flipColors = require('./lib/flipcolors');
const addContrast = require('./lib/addcontrast');
const randomColors = require('./lib/randomcolors');
const fs = require('fs');

let file = 'finger-print.bmp';

(index.bwTransformer = () => {
  fs.readFile(`${__dirname}/__test__/assets/${file}`, (error, data) => {
    if (error){
      console.error(error);
      return;
    }

    let parsedBitmap = bitmap.parseBitmap(data);
    let bwTransformed = bwTransform.transform(parsedBitmap);
    // console.log(parsedBitmap);
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
})();
