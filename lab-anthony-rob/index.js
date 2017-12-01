'use strict';

const fs = require('fs');
const parser = require('./lib/parser');
const transform = require('./lib/transform');
const writer = require('./lib/writer');

// pass the returned buffer array to parser
//     parser returns an object with the meta data about the bmp file

// pass buffer, metadata object, and transform index to transform
//     manipulate the buffer based on specific transform requirements
//     return a modified buffer

// pass the modified buffer and outfile path to writer
//     write the buffer to the outfile

const modifyBmp = (infile, outfile, transformIndex) => {
  fs.readFile(infile, (error, data) => {
    if (error){
      throw new TypeError('bad input file path');
    }
    console.log(data.toString('hex'));
    // let bmpMeta = parser(data);
    // let newBuffer = transform(data, bmpMeta, transformIndex);
    // writer(newBuffer, outfile);
  });
};
modifyBmp(`${__dirname}/__test__/assets/bitmap.bmp`);
