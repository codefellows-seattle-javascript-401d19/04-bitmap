'use strict';

const asset = require('./assets/testAsset.js');

const transform = require('../lib/transform.js');

describe('transform.js', () => {
  test('transform should return a buffer', () => {
    expect(transform(asset.bmpData, 0)).toBeDefined();
  });
});
