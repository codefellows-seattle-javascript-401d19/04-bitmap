'use strict';

const bitmap = require('../lib/bitmap');
const fs = require('fs');

describe('lib/bitmap.js', () => {

  describe('testing for valid bitmap details', () => {
    test('testing to see that we are receiving expected file paths ', done => {
      fs.readFile(`${__dirname}/asset/house.bmp`, (error, data) => {
        let parsedBitmap = bitmap.parseBitmap(data);
        expect(error).toBeNull();
        expect(parsedBitmap).not.toBeNull();
        done();
      });
    });
    test('testing to see that bitmap offsets are correct ', done => {
      fs.readFile(`${__dirname}/asset/house.bmp`, (error, data) => {
        let parsedBitmap = bitmap.parseBitmap(data);
        expect(error).toBeNull();
        expect(parsedBitmap.fileSize).toEqual(66616);
        expect(parsedBitmap.type).toEqual('BM');
        expect(parsedBitmap.pixelTableOffset).toEqual(1078);
        expect(parsedBitmap.height).toEqual(256);
        done();
      });
    });
  });
});