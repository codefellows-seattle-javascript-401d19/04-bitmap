'use strict';

const asset = require('./assets/testAsset');
const parser = require('../lib/parser');

describe('parser.js', () => {
  let testPixelArray = [];
  for (let row = 0; row < 150; row++) {
    for (let col = 0; col < 100; col++) {
      if (row < 50)
        testPixelArray.push(0);
      else if (row < 100)
        testPixelArray.push(1);
      else
        testPixelArray.push(2);
    }
  }

  let testPixelArrayFormatted = [];
  // for(let i = 0; i < 150; i++)
  //   testPixelArrayFormatted.push(testPixelArray.slice(i * 100, (1 + 1) * 100));

  test('Parser should return an object containing the metadata from a buffer.', () => {
    let testData = {
      buffer: asset.testBuffer,
      type: 'BM',
      fileSize: 15066,
      pixelArrayOffset: 66,
      width: 100,
      height: 150,
      colorPaletteBuffer: Buffer.from(asset.testBufferColorPalette),
      pixelArrayRowLength: 100,
      pixelArraySize: 15000,
      pixelArrayBuffer: Buffer.from(testPixelArray),
      // pixelArray: testPixelArrayFormatted,
    };
    expect(parser(asset.testBuffer)).toEqual(testData);
  });
});
