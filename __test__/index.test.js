'use strict';

// const bitmap = require('./lib/bitmap.js');
const bitmapper = require('../index');
const chaos = require('../lib/chaos');



describe('index.js', () =>{
  describe('bitmapper.writer', () => {
    test('chaos.chaos should create 3 files with transformations and changed file name', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmap.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];
      let transformName = 'chaos';

      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(data[0].buffer).not.toBeNull();
        expect(data[1].buffer).not.toBeNull();
        expect(data[2].buffer).not.toBeNull();
        done();
      });
    });
    test('greyscale.greyscale should create 3 files with transformations and changed file name', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmap.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let transformName = 'greyscale';
      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(data[0].buffer).not.toBeNull();
        expect(data[1].buffer).not.toBeNull();
        expect(data[2].buffer).not.toBeNull();
        done();
      });
    });
    test('invert.invert should create 3 files with transformations and changed file name', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmap.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let transformName = 'invert';
      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(data[0].buffer).not.toBeNull();
        expect(data[1].buffer).not.toBeNull();
        expect(data[2].buffer).not.toBeNull();
        // expect(data[1].buffer).not.toBeNull();
        // expect(data[2].buffer).not.toBeNull();
        done();
      });
    });
    test('should return error callback if a filepath is bad', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmapp.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let transformName = 'invert';
      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(error).not.toBeNull();
        done();
      });
    });

    test('should throw error if inputPats is not array', done => {
      let inputPaths = 'incorrect inputPaths';

      let transformName = 'invert';
      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      expect(() => {bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(error).toBe('inputPaths must be an array of strings');
        expect(data).toBe('incorrect inputPaths');
        done();
      });}).toThrow();
    });

    test('should throw error if outputPats is not array', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmapp.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let transformName = 'invert';
      let outputPaths = 'incorrect outputPaths';

      expect(() => {bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(error).toBe('outputPaths must be an array of strings');
        expect(data).toBe('incorrect outputPaths');
        done();
      });}).toThrow();
    });

    test('should throw error if transformName is not a string', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmapp.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let transformName = () => {
        console.log('i am not a string');
      };
      let outputPaths = [
        `${__dirname}/../__test__/dump/bitmap-${transformName}.bmp`,
        `${__dirname}/../__test__//dump/finger-print-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/house-${transformName}.bmp`,
        `${__dirname}/../__test__/dump/non-palette-bitmap-${transformName}.bmp`,
      ];

      expect(() => {bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(error).toBe('transformName must be a string');
        done();
      });}).toThrow();
    });

  });
});

// if(typeof inputPaths !== 'object'){
//   callback('inputPaths must be an array of strings', inputPaths);
//   throw new TypeError('inputPaths must be an array of strings');
// }
// if(typeof outputPaths !== 'object'){
//   callback('outputPaths must be an array of strings', outputPaths);
//   throw new TypeError('outputPaths must be an array of strings');
// }
// if(typeof transformName !== 'string'){
//   callback('transformName must be a string', transformName);
//   throw new TypeError('transformName must be a string');
// }
// if(transformName !== 'invert' && transformName !== 'chaos' && transformName !== 'greyscale'){
//   callback('transformName must be either invert, chaos, or greyscale', transformName);
//   throw new TypeError('transformName must be either invert, chaos, or greyscale');
// }
