'use strict';

const asset = require('./assets/testAsset');
const transform = require('../lib/transform');

describe('transform.js', () => {
  test('The grayscaleAvg transform should reassign the average of each rgb\'s r, g, & b values to each color in the object\'s color palette.', () => {
    transform(asset.testData1, ['grayscaleAvg']);
    expect(asset.testData1.colorPaletteBuffer).toEqual(Buffer.from([
      85, 85, 85, 0,
      85, 85, 85, 0,
      85, 85, 85, 0,
    ]));
  });

  test('The grayscaleSoft transform should take the value from the blue channel and assign it to red and green as well.', () => {
    transform(asset.testData4, ['grayscaleSoft']);
    expect(asset.testData4.colorPaletteBuffer).toEqual(Buffer.from([
      255, 255, 255, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]));
  });

  test('The red transform should add full red to each color in the palette.', () => {
    transform(asset.testData5, ['red']);
    expect(asset.testData5.colorPaletteBuffer).toEqual(Buffer.from([
      255, 0, 255, 0,
      0, 255, 255, 0,
      0, 0, 255, 0,
    ]));
  });

  test('The blue transform should add full blue to each color in the palette.', () => {
    transform(asset.testData6, ['blue']);
    expect(asset.testData6.colorPaletteBuffer).toEqual(Buffer.from([
      255, 0, 0, 0,
      255, 255, 0, 0,
      255, 0, 255, 0,
    ]));
  });

  test('The green transform should add full green to each color in the palette.', () => {
    transform(asset.testData7, ['green']);
    expect(asset.testData7.colorPaletteBuffer).toEqual(Buffer.from([
      255, 255, 0, 0,
      0, 255, 0, 0,
      0, 255, 255, 0,
    ]));
  });

  test('The grayscaleLum transform should multiply each value of rgb by a specific numerator and reassigns the average of each rgb\'s r, g, & b values to each color in the object\'s color palette.', () => {
    transform(asset.testData1, ['grayscaleLum']);
    expect(asset.testData1.colorPaletteBuffer).toEqual(Buffer.from([
      84, 84, 84, 0,
      84, 84, 84, 0,
      84, 84, 84, 0,
    ]));
  });

  test('The invert transform should replace each r, g, and b value with its distance from 255 for each rgb value in the color palette.', () => {
    transform(asset.testData2, ['invert']);
    expect(asset.testData2.colorPaletteBuffer).toEqual(Buffer.from([
      0, 255, 255, 0,
      255, 0, 255, 0,
      255, 255, 0, 0,
    ]));
  });

  test('The flipY transform should reverse the order of rows in the pixel array', () => {
    transform(asset.testDataFlipY, ['flipY']);
    expect(asset.testDataFlipY.buffer).toEqual(asset.testBufferFlipY);
  });

  test('Transform should be able to apply multiple transforms to the same data object.', () => {
    transform(asset.testData3, ['invert', 'grayscaleAvg']);
    expect(asset.testData3.colorPaletteBuffer).toEqual(Buffer.from([
      170, 170, 170, 0,
      170, 170, 170, 0,
      170, 170, 170, 0,
    ]));
  });

  test('If an invalid transformation name is provided, an error is thrown.', () => {
    expect(() => {
      transform(asset.testData3, ['introvert']);
    }).toThrow();
  });
});
