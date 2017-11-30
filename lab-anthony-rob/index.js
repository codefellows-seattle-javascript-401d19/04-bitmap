'use strict';

const reader = require('./lib/reader');
const parser = require('./lib/parser');
const transform = require('./lib/transform');
const writer = require('./lib/writer');

// pass a path to reader
//     reader returns a buffer array generated from the File

// pass the returned buffer array to parser
//     parser returns an object with the meta data about the bmp file

// pass buffer, metadata object, and transform index to transform
//     manipulate the buffer based on specific transform requirements 
//     return a modified buffer

// pass the modified buffer and outfile path to writer
//     write the buffer to the outfile

const modifyBmp = (infile, outfile, transformIndex) => {
  let buffer = reader(infile);
  let bmpMeta = parser(buffer);
  let newBuffer = transform(buffer, bmpMeta, transformIndex);
  writer(newBuffer, outfile);
};


