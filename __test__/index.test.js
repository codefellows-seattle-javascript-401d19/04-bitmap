'use strict';

// const bitmap = require('./lib/bitmap.js');
const bitmapper = require('../index');
const chaos = require('../lib/chaos');



describe('index.js', () =>{
  describe('bitmapper.writer', () => {
    test('should create 3 files with transformations and changed file name', done => {
      let inputPaths = [
        `${__dirname}/assets/bitmap.bmp`,
        `${__dirname}/assets/finger-print.bmp`,
        `${__dirname}/assets/house.bmp`,
      ];

      let outputPaths = 'string standin';
      let transformName = 'invert';

      bitmapper.writer(inputPaths, outputPaths, transformName, (error,data) => {
        expect(data[0].buffer).not.toBeNull();
        expect(data[1].buffer).not.toBeNull();
        console.log(data);
        expect(data[2].buffer).not.toBeNull();
        // expect(data[1].buffer).not.toBeNull();
        // expect(data[2].buffer).not.toBeNull();
        done();
      });
    });
    // test('should return error callback if a filepath is bad', done => {
    //   let filePaths = [
    //     `${__dirname}/assets/bitmaaaaaaaap.bmp`,
    //     `${__dirname}/assets/finger-print.bmp`,
    //     `${__dirname}/assets/house.bmp`,
    //     `${__dirname}/assets/non-palette-bitmap.bmp`,
    //   ];
    //   bitmapper.parser(filePaths, (error, data) => {
    //     expect(error).not.toBeNull();
    //     done();
    //   });
    // });
  // });

  // describe('chaos.chaos.js', () => {
  //   test('modify colors to be different', done => {
  //     let filePaths = [
  //       `${__dirname}/assets/bitmap.bmp`,
  //       `${__dirname}/assets/finger-print.bmp`,
  //       `${__dirname}/assets/house.bmp`,
  //       `${__dirname}/assets/non-palette-bitmap.bmp`,
  //     ];
  //     let objectArray = bitmapper.parser(filePaths, (error, data) => {
  //       done();});
  //
  //     console.log('objectArray: ', objectArray);
  //     chaos.chaos(objectArray, (error, data) => {
  //       expect(error).toBeNull();
  //       expect(data[0].color).not.toBe(objectArray[0].color); //making sure color changed;
  //       expect(data[1].color).not.toBe(objectArray[1].color); //making sure color changed;
  //       expect(data[2].color).not.toBe(objectArray[2].color); //making sure color changed;
  //       expect(data[3].color).not.toBe(objectArray[3].color); //making sure color changed;
  //     });
  //   });

  });

  // describe('bitmapper.createNewFiles', () => {
  //   test('should output four new files in dump folder', done => {
  //     let inputFilePaths = [
  //       `${__dirname}/assets/bitmap.bmp`,
  //       `${__dirname}/assets/finger-print.bmp`,
  //       `${__dirname}/assets/house.bmp`,
  //       `${__dirname}/assets/non-palette-bitmap.bmp`,
  //     ];
  //     let outputFilePaths = [
  //       `${__dirname}/dump/bitmap2.bmp`,
  //       `${__dirname}/dump/finger-print2.bmp`,
  //       `${__dirname}/dump/house2.bmp`,
  //       `${__dirname}/dump/non-palette-bitmap2.bmp`,
  //     ];
  //     let transformer = 'undefined function'; //put name of function here
  //     bitmapper.createNewFiles(inputFilePaths, outputFilePaths, transformer, (error,data) => {
  //       expect(typeof data[0]).toBe('object');
  //       expect(typeof data[1]).toBe('object');
  //       expect(typeof data[2]).toBe('object');
  //       expect(typeof data[3]).toBe('object');
  //       done();
  //     });
  //   });
  //
  // });
});
