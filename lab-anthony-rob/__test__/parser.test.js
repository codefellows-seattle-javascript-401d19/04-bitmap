'use strict';

const asset = require('./assets/testAsset');
const parser = require('../lib/parser');

describe('parser.js', () => {
  test('Parser should return an object containing the metadata from a buffer.', () => {
    let testData = {
      buffer: asset.testBuffer,
      type: 'BM',
      fileSize: 15066,
      pixelArrayOffset: 66,
      width: 100,
      height: 150,
      colorPaletteBuffer: Buffer.from(asset.testBufferColorPalette),
      pixelArraySize: 15000,
    };
    expect(parser(asset.testBuffer)).toEqual(testData);
  });
});
