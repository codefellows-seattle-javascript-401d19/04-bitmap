'use strict';

const chaos = module.exports = {};
const fs = require('fs');


let newPaths = [
  `bitmap-chaos.bmp`,
  `finger-print-chaos.bmp`,
  `house-chaos.bmp`,
  `non-palette-bitmap-chaos.bmp`,
];



chaos.chaos = (objectArray, callback) =>{
  for(let i in objectArray){
    objectArray[i].slicedColorTable.forEach((value, position, array) => {
      if(position % 4 === 1) { //r
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(Math.floor(Math.random()*(255)), position);
        // console.log('new value', value);
      }
      if(position % 4 === 2) { //g
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(Math.floor(Math.random()*(255)), position);
        // console.log('new value', value);
      }
      if(position % 4 === 3) { //b
        // console.log('old value', value);
        objectArray[i].slicedColorTable.writeUInt8(Math.floor(Math.random()*(255)), position);
        // console.log('new value', value);
      }
    });
    fs.writeFile(newPaths[i], objectArray[i].buffer);
  }
  // callback(null, objectArray);
  callback(null, objectArray);
};
