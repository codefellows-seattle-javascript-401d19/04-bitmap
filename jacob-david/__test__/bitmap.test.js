'use strict';

const bitmap = require('../bitmap');

describe('bitmap-test.js', () => {
  test('the test to make sure our bitmap rendered. i think', (done => {

    bitmap.readFile((error,data) => {
      expect(error).toBeNull();
      expect(data).toEqual('new bitmap question mark');
      done();
    });
  }));
});
