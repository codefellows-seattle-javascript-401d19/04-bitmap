'use strict';

const { transFile } = require('../lib/trans-img');
const { getFile } = require('../lib/read-img');

describe('trans-img.js', () => {
  test('return acidified image where all G values are equal to 0', done => {
    const inputFilePath = `${__dirname}/assets/house.bmp`;
    const expected = 0;
    const transformName = 'acid';
    let result = null;
    getFile(inputFilePath, (error, data) => {
      if(error) {
        console.error(error);
        return;
      }
      let constructedBitmap = data;
      transFile(transformName, constructedBitmap, (error, data) => {
        result = data.colorTable[2];
        expect(error).toBeNull();
        expect(result).toEqual(expected);
        done();
      });
    });
  });

  test('return greyscale image in which all RGB values in single color are same', done => {
    const transformName = 'greyscale';
    const inputFilePath = `${__dirname}/assets/house.bmp`;
    let expectedRed = null;
    let expectedGreen = null;
    let expectedBlue = null;
    getFile(inputFilePath, (error, data) => {
      if(error) {
        console.error(error);
        return;
      }
      let constructedBitmap = data;
      transFile(transformName, constructedBitmap, (error, data) => {
        expectedRed = data.colorTable[1];
        expectedGreen = data.colorTable[2];
        expectedBlue = data.colorTable[3];
        expect(error).toBeNull();
        expect(expectedRed).toEqual(expectedBlue);
        expect(expectedBlue).toEqual(expectedGreen);
        done();
      });
    });
  });

  test('return inverted image in which RGB value are modified', done => {
    const transformName = 'invert';
    const inputFilePath = `${__dirname}/assets/house.bmp`;
    getFile(inputFilePath, (error, data) => {
      if(error) {
        console.error(error);
        return;
      }
      let constructedBitmap = data;
      transFile(transformName, constructedBitmap, error => {
        expect(error).toBeNull();
        done();
      });
    });
  });

  test('throw an error if invalid image transformation', done => {
    const transformName = 'invalid';
    const inputFilePath = `${__dirname}/assets/house.bmp`;
    getFile(inputFilePath, (error, data) => {
      if(error) {
        console.error(error);
        return;
      }
      let constructedBitmap = data;
      transFile(transformName, constructedBitmap, error => {
        expect(error).toString('Please use one of the following values: \n greyscale \n invert \n magenta');
        // console.log(error);
        done();
      });
    });
  });
});
