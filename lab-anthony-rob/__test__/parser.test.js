'use strict';

const asset = require('./assets/testAsset.js');
const parser = require('../lib/parser.js');

describe('parser.js', () => {
  const bufferData = {
    buffer: asset.buffer,
    type: asset.buffer.toString('utf-8', 0,2),
    filesize: asset.buffer.readInt32LE(2),
    pixelTableOffset: asset.buffer.readInt32LE(10),
    height: asset.buffer.readInt32LE(22),
  };
  test('parser should return an object containing the metadata', () => {
    expect(parser(asset.buffer)).toMatchObject(bufferData);
  });
});
