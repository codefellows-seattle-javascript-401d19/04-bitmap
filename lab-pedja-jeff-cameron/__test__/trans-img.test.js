'use strict';

const { transFile } = require('../lib/trans-img');
const { getFile } = require('../lib/read-img');

describe('trans-img.js', () => {
  test('return acidified image where all G values are equal to 0', done => {
    const transformName = 'acid';
    const inputFilePath = `${__dirname}/assets/house.bmp`;
    getFile(inputFilePath, (error, data) => {
      if(error) {
        console.error(error);
        return;
      }
      let constructedBitmap = data;
      transFile(transformName, constructedBitmap, (error, data) => {
        let acidGreen = data[2];
        expect(error).toBeNull();
        expect(acidGreen).toString(0);
        done();
      });
    });
  });

  
});
