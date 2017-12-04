'use strict';

const randomColors = require('../lib/randomcolors');

describe('lib/randomcolors.js', () => {

  describe('testing randomcolors.transform to return random values', () => {
    test('function should return expected values for bitmap with color table', () => {
      const testArr = {};
      testArr.buffer = new Buffer([0, 0, 20, 0, 30, 34, 88, 0]);
      testArr.colorTable = testArr.buffer.slice(0);
      const newBuff = randomColors.transform(testArr);
      expect(newBuff.buffer.readUInt8(2)).not.toBe(30);
      expect(newBuff.buffer.readUInt8(6)).not.toBe(88);
    });

    test('function should return expected values for bitmap without color table', () => {
      const testArr = {};
      testArr.pixelTableOffset = 54;
      const valArr = new Array(54);
      valArr.splice(54, 0, 0, 0, 20, 30, 34, 88);
      testArr.buffer = new Buffer(valArr);
      const newBuff = randomColors.transform(testArr);
      expect(newBuff.buffer.readUInt8(56)).not.toBe(30);
      expect(newBuff.buffer.readUInt8(59)).not.toBe(88);
    });
  });

});
