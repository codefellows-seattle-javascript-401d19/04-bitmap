'use strict';

const fs = require('fs');
const parser = require('./lib/parser');
const transform = require('./lib/transform');

// pass metadata object, and transform index to transform
//     manipulate the buffer based on specific transform requirements
//     return a modified buffer

// pass the modified buffer and outfile path to writer
//     write the buffer to the outfile

const infile = process.argv[2];
const outfile = process.argv[3];
const transforms = process.argv.splice(4);

const modifyBmp = (infile, outfile, transforms) => {
  fs.readFile(`${__dirname}/__test__/assets/${infile}`, (error, data) => {
    if (error){
      console.log('this is the infile', infile);
      console.error('bad input file path');
    }
    let bmpMeta = parser(data);
    transform(bmpMeta, transforms);
    fs.writeFile(`${__dirname}/__test__/assets/${outfile}`, bmpMeta.buffer, (error) => {
      if(error)
        console.error(error);
      console.log(outfile, 'has been created successfully');
    });
  });
};
// node index.js ./mybmp.bmp ./out.bmp grayscaleAvg invert
// modifyBmp(`${infile}`, `${outfile}`, process.argv[4], process.argv[5]);
modifyBmp(infile, outfile, transforms);
