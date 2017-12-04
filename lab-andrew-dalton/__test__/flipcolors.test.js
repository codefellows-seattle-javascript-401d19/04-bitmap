'use strict';

const flipColors = require('../lib/flipcolors');

describe('lib/flipcolors.js', () => {

  describe('testing flipcolors.transform to return inverted values', () => {
    test('function should return expected values for bitmap with color table', () => {
      const testArr = {};
      testArr.buffer = new Buffer([0, 0, 20, 0, 30, 34, 88, 0]);
      testArr.colorTable = testArr.buffer.slice(0);
      const newBuff = flipColors.transform(testArr);
      expect(newBuff.buffer.readUInt8(2)).toBe(235);
      expect(newBuff.buffer.readUInt8(6)).toBe(167);
    });

    test('function should return expected values for bitmap without color table', () => {
      const testArr = {};
      testArr.pixelTableOffset = 54;
      const valArr = new Array(54);
      valArr.splice(54, 0, 0, 0, 20, 30, 34, 88);
      testArr.buffer = new Buffer(valArr);
      const newBuff = flipColors.transform(testArr);
      expect(newBuff.buffer.readUInt8(56)).toBe(235);
      expect(newBuff.buffer.readUInt8(59)).toBe(167);
    });
  });

});
