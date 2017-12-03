'use strict';

const fs = require('fs');
const parser = require('./lib/parser');
const transform = require('./lib/transform');

const infile = process.argv[2];
const outfile = process.argv[3];
const transforms = process.argv.splice(4);

const modifyBmp = (infile, outfile, transforms) => {
  fs.readFile(`${__dirname}/__test__/assets/${infile}`, (error, data) => {
    if (error){
      return console.error('bad input file path');
    }
    let bmpMeta = parser(data);
    transform(bmpMeta, transforms);
    fs.writeFile(`${__dirname}/__test__/assets/${outfile}`, bmpMeta.buffer, (error) => {
      if(error)
        return console.error(error);
      console.log(outfile, 'has been created successfully');
    });
  });
};

modifyBmp(infile, outfile, transforms);
