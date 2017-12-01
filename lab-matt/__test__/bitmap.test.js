'use strict';

const bitmap = require('../lib/bitmap.js');
const fs = require('fs');

let files = fs.readdirSync('./__test__/assets/', (err, data) => {
  console.log(err);
  return data;
});


// ------------- TEST CONNECTION -------------------
describe('first test', () => {
  test('there is life', () => {
    expect(bitmap.helloWorld()).toEqual('life');
  });
});

// ------------- CODE -------------------
describe('testing fs.readdir reads all files in a folder and returns an array', () => {
  test('fs.readdir(\'assets/', () => {
    expect(files).toEqual(['bitmap.bmp', 'finger-print.bmp', 'house.bmp', 'non-palette-bitmap.bmp']);
  });
});

describe('testing buffering file returns data', () => {
  test('buffer - type is equal to "BM"', (done) => {
    bitmap.bufferFile(files[0], (err, data) => {
      console.log(data.buffer);
      expect(data.type).toEqual('BM');
      expect(data.fileSize).not.toBeNull();
      expect(data.pixelDataStart).not.toBeNull();
      expect(data.width).not.toBeNull();
      
      
      done();
    });
  });
});

