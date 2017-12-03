'use strict';

const greyscale = module.exports = {};
const fs = require('fs');


let newPaths = [
  `bitmap-test.bmp`,
  `finger-print-test.bmp`,
  `house-test.bmp`,
  `non-palette-bitmap-test.bmp`,
];



greyscale.greyscale = (objectArray, callback) =>{
  for(let i in objectArray){
    objectArray[i].slicedColorTable.forEach((value, position, array) => {
      if(position % 4 === 1) { //r
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(array[position-1], position);
        // console.log('new value', value);
      }
      if(position % 4 === 2) { //g
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(array[position-1], position);
        // console.log('new value', value);
      }
      if(position % 4 === 3) { //b
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(array[position-1], position);
        // console.log('new value', value);
      }
    });
    fs.writeFile(newPaths[i], objectArray[i].buffer);
  }
  // callback(null, objectArray);
  callback(null, objectArray);
};
