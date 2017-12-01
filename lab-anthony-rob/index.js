'use strict';

const fs = require('fs');
const parser = require('./lib/parser');
const transform = require('./lib/transform');
const writer = require('./lib/writer');

const modifyBmp = (infile, outfile, transformIndex) => {
  fs.readFile(infile, (error, data) => {
    if (error){
      throw new TypeError('bad input file path');
    }
    let bmpMeta = parser(data);
    let newBuffer = transform(data, bmpMeta, transformIndex);
    writer(newBuffer, outfile);
  });
};
