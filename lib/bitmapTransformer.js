'use strict';

const fs = require(`fs`);
const bmpPaths = fs.readdirSync(`${__dirname}/../asset`);
const bitmapTransformer = module.exports = {};

// const FILE_SIZE_OFFSET = 2;
const PIXEL_TABLE_OFFSET = 10;
// const HEIGHT_OFFSET = 22;

bitmapTransformer.getBufferData = (buffer) => {
  let parsedBitmap = {};

  parsedBitmap.buffer = buffer;
  // parsedBitmap.headerOffset = buffer.toString('utf-8',0,2); //this works- returns 'BM'
  // console.log(parsedBitmap.fileSize = buffer.readInt32LE(2)); //this also works- get 66616 bytes
  parsedBitmap.tableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET); //this returns 1078 for some reason
  // console.log(parsedBitmap.tableOffset);
  // console.log(buffer, `this is the complete buffer`);
  // console.log(parsedBitmap.buffer.readInt32LE(PIXEL_TABLE_OFFSET), `this is a part of the buffer`);
};

bitmapTransformer.readFile = (filePath, callback) => {
  fs.readFile(`${__dirname}/../asset/${filePath}`,
    (error, output) => {
      if (error)
        return error;

      bitmapTransformer.getBufferData(output);
    }
  );
};


//get the bmp file-- done
//get the buffer data-- done
  //get the Pixel Table Data
    //only get the pixel color table data
    //let pixelDataStart = buffer.readInt32LE(PIXEL_TABLE_OFFSET); (location in buffer where image data should begin)
//transform a color's pixel value to be something else
