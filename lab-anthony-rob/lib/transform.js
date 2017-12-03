'use strict';

const transforms = {};

transforms.grayscaleAvg = bmpData => {
  let buff = bmpData.colorPalleteBuffer;
  for(let i = 0; i < buff.length; i += 4) {
    let average = (buff[i] + buff[i + 1] + buff[i + 2])/3;
    buff[i] = buff[i + 1] = buff[i + 2] = average;
  }
};

transforms.grayscaleLum = bmpData => {
  let buff = bmpData.colorPalletteBuffer;
  for(let i = 0; i < buff.length; i += 4) {
    let lumosity = ((buff[i] * 0.21) + (buff[i + 1] * 0.72) + (buff[i + 2] * 0.07));
    buff[i] = buff[i + 1] = buff[i + 2] = lumosity;
  }
};

transforms.invert = bmpData => {
  let buff = bmpData.colorPalleteBuffer;
  for(let i = 0; i < buff.length; i += 4) {
    buff[i] = 255 - buff.readInt8(i);
    buff[i + 1] = 255 - buff.readInt8(i + 1);
    buff[i + 2] = 255 - buff.readInt8(i + 2);
  }
};

module.exports = (bmpData, myTransforms) => {
  for(let transform of myTransforms)
    transforms[transform](bmpData);
};
