'use strict';

const bwTransform = require('../lib/bwtransform');

describe('lib/bwtransform.js', () => {

  describe('testing bwtransform.transform to return grayscale values', () => {
    test('function should return expected values for bitmap with color table', () => {
      const testArr = {};
      testArr.buffer = new Buffer([0, 0, 20, 0, 30, 34, 88, 0]);
      testArr.colorTable = testArr.buffer.slice(0);
      const newBuff = bwTransform.transform(testArr);
      expect(newBuff.buffer.readUInt8(2)).toBe(0);
      expect(newBuff.buffer.readUInt8(6)).toBe(30);
    });

    test('function should return expected values for bitmap without color table', () => {
      const testArr = {};
      testArr.pixelTableOffset = 54;
      const valArr = new Array(54);
      valArr.splice(54, 0, 0, 0, 20, 30, 34, 88);
      testArr.buffer = new Buffer(valArr);
      const newBuff = bwTransform.transform(testArr);
      expect(newBuff.buffer.readUInt8(53)).toBe(0);
      expect(newBuff.buffer.readUInt8(58)).toBe(30);
    });
  });

});
