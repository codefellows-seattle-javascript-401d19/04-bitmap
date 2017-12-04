'use strict';

const greyscale = require('./lib/greyscale.js');
const invert = require('./lib/invert.js');
const chaos = require('./lib/chaos.js');


const bitmap = require('./lib/bitmap.js');
const fs = require('fs');

const bitmapper = module.exports = {};

bitmapper.writer = (inputPaths, outputPaths, transformName, callback) =>{
  let results = [];
  function parseFilesRecursively(){
    if(inputPaths.length === 0){
      eval(`${transformName}.${transformName}(results, outputPaths, callback)`);
    }else
      fs.readFile(inputPaths.shift(), (error,data) => {
        if(error){
          callback(error);
          return;
        }
        results.push(bitmap.parseBitmap(data));
        parseFilesRecursively();
      });
  }

  if(typeof inputPaths !== 'object'){
    callback('inputPaths must be an array of strings', inputPaths);
    throw new TypeError('inputPaths must be an array of strings');
  }else if(typeof outputPaths !== 'object'){
    callback('outputPaths must be an array of strings', outputPaths);
    throw new TypeError('outputPaths must be an array of strings');
  }else if(typeof transformName !== 'string'){
    callback('transformName must be a string', transformName);
    throw new TypeError('transformName must be a string');
  }else{
    parseFilesRecursively();
  }
};
