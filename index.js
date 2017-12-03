'use strict';

const greyscale = require('./lib/greyscale.js');
const invert = require('./lib/invert.js');
const chaos = require('./lib/chaos.js');


const bitmap = require('./lib/bitmap.js');
const fs = require('fs');

const bitmapper = module.exports = {};

let paths = [
  `${__dirname}/__test__/assets/bitmap.bmp`,
  `${__dirname}/__test__/assets/finger-print.bmp`,
  `${__dirname}/__test__/assets/house.bmp`,
  `${__dirname}/__test__/assets/non-palette-bitmap.bmp`,
];
let outputPaths = [
  `${__dirname}/__test__/dump/bitmap-test.bmp`,
  `${__dirname}/__test__/dump/finger-print-test.bmp`,
  `${__dirname}/__test__/dump/house-test.bmp`,
  `${__dirname}/__test__/dump/non-palette-bitmap-test.bmp`,
];
let transformName = 'invert';

bitmapper.writer = (inputPaths, outputPaths, transformName, callback) =>{
  //TODO: error check if array already has lenght ===0
  let results = [];

  function parseFilesRecursively(){
    if(paths.length === 0){

      eval(`${transformName}.${transformName}(results, callback)`);



    }else
      fs.readFile(paths.shift(), (error,data) => {
        //inside this callback returns a file or error
        if(error){
          callback(error);
          return;
        }

        results.push(bitmap.parseBitmap(data));
        parseFilesRecursively();
      });
  }
  // console.log('first iteration');
  parseFilesRecursively();
  // console.log('invert called');
};

bitmapper.writer(paths, outputPaths, transformName,  (error, results) => {console.log(results); console.log(error);});

// bitmapper.createNewFiles(inputFilePaths, outputFilePaths, transformer, callback) => {
// constructor(tansformer(parser(inputFilePaths)), outputFilePaths) => output new files
// constructor takes in the transformer, which takes in parsed object created from the filepaths- it also takes in the output paths
//it constructs new files out of them through the callback;

// }


// let stringBuffer = Buffer('The Hound');

// console.log(`Buffer as a string: ${stringBuffer.toString()}`);
// console.log(`Buffer as hex`);
// console.log(stringBuffer);

// console.log(`Extracting only one character`);
// console.log(stringBuffer.readUInt8(0));

// console.log(stringBuffer.toString('hex'));
// console.log(stringBuffer.toString('base64'));

// let fromBase64 = Buffer.from('VGhlIEhvdW5k', 'base64');
// console.log(fromBase64.toString());

// let fromBase64 = Buffer.from('VA==', 'base64');
// console.log(fromBase64.toString());

// console.log(stringBuffer.readUInt8(0));
// console.log(stringBuffer.readUInt8(1));
// //
// console.log(stringBuffer.readUInt16LE(0));

// stringBuffer.fill(97);
// stringBuffer.writeUInt8(97,5);
// stringBuffer.write('and Sir Gregor');//size of the buffer stays constant, the result is 'and Sir G'

// console.log(stringBuffer);
// console.log(stringBuffer.toString());

// console.log(stringBuffer.readUInt16LE(0).toString());
// console.log(stringBuffer.readUInt16LE(2));
// console.log(stringBuffer.readUInt16LE(4));
// console.log(stringBuffer.readUInt16LE(6));
// console.log(stringBuffer.readUInt16LE(8));
