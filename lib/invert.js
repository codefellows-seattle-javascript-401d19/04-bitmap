'use strict';

const invert = module.exports = {};
const fs = require('fs');

invert.invert = (objectArray, outputPaths, callback) =>{
  for(let i in objectArray){
    objectArray[i].slicedColorTable.forEach((value, position, array) => {
      if(position % 4 === 1) { //r
        objectArray[i].slicedColorTable.writeUInt8(255-array[position], position);
      }
      if(position % 4 === 2) { //g
        objectArray[i].slicedColorTable.writeUInt8(255-array[position], position);
      }
      if(position % 4 === 3) { //b
        objectArray[i].slicedColorTable.writeUInt8(255-array[position], position);
      }
    });
    fs.writeFile(outputPaths[i], objectArray[i].buffer);
    console.log(`new bmp successfully created at: ${outputPaths[i]}`);
  }
  callback(null, objectArray);
};
