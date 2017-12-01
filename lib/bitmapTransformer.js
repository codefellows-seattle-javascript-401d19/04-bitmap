'use strict';

const fs = require(`fs`);
const bmpPaths = fs.readdirSync(`${__dirname}/../asset`);
// console.log(fs.readdirSync(`${__dirname}/../asset`)); //gives back array of bmp file names (as strings?)
const bitmapTransformer = module.exports = {};

const FILE_SIZE_OFFSET = 2;
const PIXEL_TABLE_OFFSET = 10;

bitmapTransformer.getBuffer = (filePath) => {
  fs.readFile(`${__dirname}/../asset/${filePath}`,
    (error, output) => {
      if (error)
        return error;

    }
  );
};



//get the bmp file
//get the buffer data
//need to transform a color's pixel value to be something else
