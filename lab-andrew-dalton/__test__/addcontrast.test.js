'use strict';

const addContrast = require('../lib/addcontrast');

describe('lib/addcontrast.js', () => {

  describe('testing addcontrast.transform to return values of higher contrast', () => {
    test('function should return expected values for bitmap with color table', () => {
      const testArr = {};
      testArr.buffer = new Buffer([0, 0, 20, 0, 30, 34, 88, 0]);
      testArr.colorTable = testArr.buffer.slice(0);
      const newBuff = addContrast.transform(testArr);
      expect(newBuff.buffer.readUInt8(2)).toBe(0);
      expect(newBuff.buffer.readUInt8(6)).toBe(255);
    });

    test('function should return expected values for bitmap without color table', () => {
      const testArr = {};
      testArr.pixelTableOffset = 54;
      const valArr = new Array(54);
      valArr.splice(54, 0, 0, 0, 20, 30, 34, 88);
      testArr.buffer = new Buffer(valArr);
      const newBuff = addContrast.transform(testArr);
      expect(newBuff.buffer.readUInt8(53)).toBe(0);
      expect(newBuff.buffer.readUInt8(59)).toBe(252);
    });
  });

});
