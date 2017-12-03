'use strict';

const { writeFile } = require('../lib/write-img');

describe('write-img.js', () => {
  test('An error should be returned if the filepath is invalid type', () => {
    const invalidFilePath = [];
    const outputData = {};
    outputData.buffer = 'test string';
    expect(() => {
      writeFile(invalidFilePath, outputData);
    }).toThrow();
  });

  test('throw an error if invalid path name is given', done => {
    const invalidFilePath = './invalid/path/name';
    const outputData = {};
    outputData.buffer = 'test string';
    writeFile(invalidFilePath, outputData, error => {
      expect(error).not.toBeNull();
      done();
    });
  });

  test('return null error if the file is written successfully', (done) => {
    const outputFilePath = 'output/test.txt';
    const outputData = {};
    outputData.buffer = 'test string';
    writeFile(outputFilePath, outputData, (error) => {
      expect(error).toBeNull();
      done();
    });
  });
});
