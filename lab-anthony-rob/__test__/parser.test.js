'use strict';

const asset = require('./assets/testAsset.js');
const parser = require('../lib/parser.js');

describe('parser.js', () => {
  test('parser should return an object containing the metadata', () => {
    expect(parser(asset.buffer)).toMatchObject(asset.bmpData);
  });
});
