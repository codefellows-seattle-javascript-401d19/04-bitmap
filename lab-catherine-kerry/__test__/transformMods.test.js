'use strict';

const transformsMods = require('../lib/transformMods');

describe('lib/transformMods.js', () => {

  describe('testing transforms.grayscale to return grayscale values', () => {
    test('function should return expected values', () => {
      const sampleArray = {};
      sampleArray.buffer = new Buffer ([0, 56, 80, 70]);
      sampleArray.colorTable = sampleArray.buffer.slice(0);
      const newArray = transformsMods.grayscale(sampleArray);
      expect(newArray.buffer.readUInt8(1)).toBe(0);
      expect(newArray.buffer.readUInt8(2)).toBe(0);
    });
  });

  describe('testing transforms.invert to return inverted values', () => {
    test('function should return expected values', () => {
      const sampleArray = {};
      sampleArray.buffer = new Buffer ([0, 0, 80, 70]);
      sampleArray.colorTable = sampleArray.buffer.slice(0);
      const newArray = transformsMods.invert(sampleArray);
      expect(newArray.buffer.readUInt8(1)).toBe(255);
      expect(newArray.buffer.readUInt8(2)).toBe(175);
    });
  });

  describe('testing transforms.random to return random values', () => {
    test('function should return expected values', () => {
      const sampleArray = {};
      sampleArray.buffer = new Buffer ([0, 0, 80, 70]);
      sampleArray.colorTable = sampleArray.buffer.slice(0);
      const newArray = transformsMods.random(sampleArray);
      expect(newArray.buffer.readUInt8(1)).not.toBe(0);
      expect(newArray.buffer.readUInt8(2)).not.toBe(80);
    });
  });
});