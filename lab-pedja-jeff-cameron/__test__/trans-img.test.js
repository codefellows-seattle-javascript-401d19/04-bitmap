'use strict';

const { transFile } = require('../lib/trans-img');

describe('trans-img.js', () => {
  test('return acidified image where G value is equal to 0', done => {
    const transformName = 'acid';
    const constructedBitmap = {};
    constructedBitmap.colorTable = [0, 128, 128, 128];
    const expected = 0;
    let result = null;

    const callback = (error, data) => {
      result = data;
      expect(error).toBeNull();
      expect(result.colorTable[2]).toEqual(expected);
      done();
    };

    transFile(transformName, constructedBitmap, callback);
  });

  test('return greyscale image in which all RGB values in single color are same', done => {
    const transformName = 'greyscale';
    const constructedBitmap = {};
    constructedBitmap.colorTable = [0, 50, 150, 250];
    let expected = [0, 1, 1, 1];
    let result = null;

    const callback = (error, data) => {
      result = data;
      expect(error).toBeNull();
      expect(result.colorTable).toEqual(expected);
      done();
    };

    transFile(transformName, constructedBitmap, callback);
  });

  test('return inverted image in which RGB value are modified', done => {
    const transformName = 'invert';
    const constructedBitmap = {};
    constructedBitmap.colorTable = [0, 0, 55, 155];
    let result = null;
    let expected = [0, 255, 200, 100];

    const callback = (error, data) => {
      result = data;
      expect(error).toBeNull();
      expect(result.colorTable).toEqual(expected);
      done();
    };

    transFile(transformName, constructedBitmap, callback);
  });

  test('throw an error if invalid image transformation', done => {
    const transformName = 'invalid';
    const constructedBitmap = {};
    constructedBitmap.colorTable = [0, 0, 55, 155];
    let expected = 'Please use one of the following values: \n greyscale \n invert \n acid';

    const callback = (error) => {
      expect(error).toString(expected);
      done();
    };
    transFile(transformName, constructedBitmap, callback);
  });
});
