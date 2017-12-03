'use strict';

const fs = require('fs');
// const asset = require('./assets/testAsset.js');
const parser = require('../lib/parser.js');

describe('parser.js', () => {
  test('parser should return an object containing the metadata', () => {
    fs.readFile(`${__dirname}/assets/house.bmp`, (error, data) => {
      if(error)
        return console.error('parser should return a valid bufferData object');
      let testData = parser(data);
      console.log(testData);
      expect(testData.type).toEqual('BM');
      expect(testData.filesize).toEqual(6616);
      expect(testData.pixelArrayOffset).toEqual(1078);
      expect(testData.width).toEqual(256);
      expect(testData.height).toEqual(256);
      expect(testData.colorPalleteBuffer).toBeDefined();
      expect(testData.buffer).toBeDefined();
    });
  });
});
