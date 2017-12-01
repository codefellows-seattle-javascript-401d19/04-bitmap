'use strict';

const { getFile } = require('../lib/read-img');

describe('read-img.js', () => {
  test('return a bitmapProps object with type property of BM', done => {
    const inputFilePath = `${__dirname}/assets/house.bmp`;
    const expected = 'BM';
    let result = null;

    const callback = (error, data) => {
      result = data;
      expect(error).toBeNull();
      expect(result.type).toEqual(expected);
      done();
    };

    getFile(inputFilePath, callback);
  });

  test('return a bitmapProps object with correct file size', done => {
    const inputFilePath = `${__dirname}/assets/house.bmp`;
    const expected = 66616;
    let result = null;

    const callback = (error, data) => {
      result = data;
      expect(error).toBeNull();
      expect(result.fileSize).toEqual(expected);
      done();
    };

    getFile(inputFilePath, callback);
  });

  test('throw an error if invalid path', done => {
    const inputFilePath = 'invalid path';

    getFile(inputFilePath, error => {
      expect(error).not.toBeNull();
      done();
    });
  });


  // invalid path
  // good path with bitMap props
});
