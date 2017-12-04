'use strict';

const bitmap = require('../lib/bitmap.js');
const fs = require('fs');

let files = fs.readdirSync('./__test__/assets/', (err, data) => {
  console.log(err);
  return data;
});

// ------------- CODE -------------------
describe('testing fs.readdir reads all files in a folder and returns an array', () => {
  test('fs.readdir(\'assets/', () => {
    expect(files).toEqual(['bitmap.bmp', 'finger-print.bmp', 'house.bmp', 'non-palette-bitmap.bmp']);
  });
});

describe('testing buffering file returns data', () => {
  test('buffer - type is equal to "BM" and has other properties', (done) => {
    bitmap.bufferFile(`./__test__/assets/${files[2]}`, 'grayscale', `${__dirname}/../created_files/`, (data) => {
      console.log(data.buffer);
      expect(data.type).toEqual('BM');
      expect(data.fileSize).not.toBeNull();
      expect(data.pixelDataTable).toEqual(1078);
      expect(data.width).not.toBeNull();
      expect(data.height).not.toBeNull();
      expect(data.bitsPerPixel).not.toBeNull();
      
      done();
    });
  });
});

describe('file formatting', () => {
  test('returning just the file name if given either filepath and/or filename.extension', () => {
    expect('/desktop/example/lib/fileName.txt'.match(/[\w-]+(?=\.)/)[0]).toEqual('fileName');
    expect('/desktop/example/lib/file-Name.txt'.match(/[\w-]+(?=\.)/)[0]).toEqual('file-Name');
    expect('fileName.txt'.match(/[\w-]+(?=\.)/)[0]).toEqual('fileName');
    expect('file-Name.txt'.match(/[\w-]+(?=\.)/)[0]).toEqual('file-Name');
  });
});