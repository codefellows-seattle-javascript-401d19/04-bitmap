'use strict';

const bitmap = require('../lib/bitmap');
const fs = require('fs');

describe('lib/bitmap.js', () => {

  describe('testing for valid bitmap file paths', () => {

    test('testing to see that we are receiving expected file paths ', () => {
      fs.readFile(`${__dirname}/asset/house.bmp`, (error, data) => {
        let parsedBitMap = bitmap.parseBitmap(data);
        expect(error).toBeNull();
        expect(parsedBitMap).not.toBeNull();
      });
    });
  });
});