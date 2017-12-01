'use strict';

const reader = require('../lib/reader');

describe ('when reader is called properly it should return a buffer array from an input file.', () => {
  test('if the file path is incorrect file path the reader should return an error', (done) => {
    reader(`${__dirname}/asset/something.bmp`, (error, data) => {
      expect(error).not.toBeNull();
      expect(data).toBeUndefined();
      done();
    });
  });
  test('This test should pass if the file path is valid', (done) => {
    reader(`${__dirname}/assets/bitmap.bmp`, (error, data) => {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      done();
    });
  });
});
