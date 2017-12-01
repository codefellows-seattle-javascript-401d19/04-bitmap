'use strict';

const bitmap = require('../lib/bitmap');
const fs = require('fs');

describe('lib/bitmap.js', () => {

  describe('testing bitmap.parseBitmap to return expected properties', () => {
    test('function should return expected properties', done => {
      fs.readFile(`${__dirname}/assets/house.bmp`, (error, data) => {
        let parsedBitmap = bitmap.parseBitmap(data);
        expect(error).toBeNull();
        expect(parsedBitmap.type).toBe('BM');
        expect(parsedBitmap.fileSize).toBe(66616);
        expect(parsedBitmap.pixelTableOffset).toBe(1078);
        expect(parsedBitmap.height).toBe(256);
        done();
      });
    });
  });

  // describe('')

});
