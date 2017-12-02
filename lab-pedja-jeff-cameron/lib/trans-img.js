'use strict';

const transImg = module.exports = {};

transImg.transFile = (transformName, constructedBitmap, callback) => {
  const colorTable = constructedBitmap.colorTable;

  switch (transformName) {
  case 'greyscale':
    greyscale(colorTable);
    break;
  case 'invert':
    invert(colorTable);
    break;
  case 'acid':
    acid(colorTable);
    break;
  default:
    callback('Please use one of the following values: \n greyscale \n invert \n magenta');
  }

  callback(null, constructedBitmap);
};


const greyscale = colorTable => {
  console.log('transforming bitmap into greyscale');

  let R = 0;
  let G = 0;
  let B = 0;

  for (let i = 0; i < colorTable.length; i+=4) {
    R++;
    G++;
    B++;
    colorTable[i+1] = R;
    colorTable[i+2] = G;
    colorTable[i+3] = B;
  }
};

const invert = colorTable => {
  console.log('transforming bitmap into inverted');

  for (let i = 0; i < colorTable.length; i+=4) {
    let R = 255;
    let G = 255;
    let B = 255;

    colorTable[i+1] = R - colorTable[i+1];
    colorTable[i+2] = G - colorTable[i+2];
    colorTable[i+3] = B - colorTable[i+3];
  }
};

const acid = colorTable => {
  console.log('transforming bitmap into acid');

  for(let i = 0; i < colorTable.length; i+=4) {
    colorTable[i+2] = 0;
  }
};
