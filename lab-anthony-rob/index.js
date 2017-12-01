'use strict';

const fs = require('fs');
const parser = require('./lib/parser');
const transform = require('./lib/transform');
const writer = require('./lib/writer');

// pass metadata object, and transform index to transform
//     manipulate the buffer based on specific transform requirements
//     return a modified buffer

// pass the modified buffer and outfile path to writer
//     write the buffer to the outfile

const modifyBmp = (infile, outfile, transformIndex) => {
  fs.readFile(infile, (error, data) => {
    if (error){
      throw new TypeError('bad input file path');
    }
    let bmpMeta = parser(data);
    let newBuffer = transform(bmpMeta, transformIndex);
    // console.log(bmpMeta.colorPalleteBuffer);
    bmpMeta.colorPalleteBuffer.forEach((byte, i) => console.log(byte, i));
    // writer(newBuffer, outfile);
  });
};

modifyBmp(`${__dirname}/__test__/assets/non-palette-bitmap.bmp`, null, 0);
