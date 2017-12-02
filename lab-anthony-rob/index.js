'use strict';

const fs = require('fs');
const parser = require('./lib/parser');
const transform = require('./lib/transform');

// pass metadata object, and transform index to transform
//     manipulate the buffer based on specific transform requirements
//     return a modified buffer

// pass the modified buffer and outfile path to writer
//     write the buffer to the outfile

const modifyBmp = (infile, outfile, ...args) => {
  fs.readFile(infile, (error, data) => {
    if (error){
      throw new TypeError('bad input file path');
    }
    let bmpMeta = parser(data);
    transform(bmpMeta, args);
    fs.writeFile(outfile, bmpMeta.buffer, (error) => {
      if(error)
        console.error(error);
      console.log(outfile, 'has been created successfully');
    });
  });
};

modifyBmp(`${__dirname}/__test__/assets/bitmap.bmp`, `${__dirname}/__test__/assets/house-copy-invert.bmp`, 'invert');
modifyBmp(`${__dirname}/__test__/assets/bitmap.bmp`, `${__dirname}/__test__/assets/house-grayscale.bmp`, 'grayscaleAvg');
modifyBmp(`${__dirname}/__test__/assets/bitmap.bmp`, `${__dirname}/__test__/assets/house-invert-grayscale.bmp`, 'invert', 'grayscaleAvg');
modifyBmp(`${__dirname}/__test__/assets/bitmap.bmp`, `${__dirname}/__test__/assets/house-grayscale-invert.bmp`, 'grayscaleAvg', 'invert');
