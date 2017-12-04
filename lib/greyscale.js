'use strict';

const greyscale = module.exports = {};
const fs = require('fs');

greyscale.greyscale = (objectArray, outputPaths, callback) =>{
  for(let i in objectArray){
    objectArray[i].slicedColorTable.forEach((value, position, array) => {
      if(position % 4 === 1) { //r
        objectArray[i].slicedColorTable.writeUInt8(array[position-1], position);
      }
      if(position % 4 === 2) { //g
        objectArray[i].slicedColorTable.writeUInt8(array[position-1], position);
      }
      if(position % 4 === 3) { //b
        objectArray[i].slicedColorTable.writeUInt8(array[position-1], position);
      }
    });
    fs.writeFile(outputPaths[i], objectArray[i].buffer);
    console.log(`new bmp successfully created at: ${outputPaths[i]}`);
  }
  callback(null, objectArray);
};
