'use strict';

const transforms = {};

let makePixelArray = bmpData => {
  let pixelArray = [];
  for (let i = 0; i < bmpData.height; i++) {
    pixelArray.push(bmpData.pixelArrayBuffer.slice(i * bmpData.pixelArrayRowLength, (i + 1) * bmpData.pixelArrayRowLength));
  }

  return pixelArray;
};

transforms.flipY = bmpData => {
  let tempBuff, array = makePixelArray(bmpData);
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    tempBuff = Buffer.from(array[i]);
    array[array.length - 1 - i].copy(array[i]);
    tempBuff.copy(array[array.length - 1 - i]);
  }
};

transforms.grayscaleSoft = bmpData => {
  let buff = bmpData.colorPaletteBuffer;
  for (let i = 0; i < buff.length; i += 4) {
    buff[i + 1] = buff[i];
    buff[i + 2] = buff[i];
  }
};

transforms.red = bmpData => {
  let buff = bmpData.colorPaletteBuffer;
  for (let i = 0; i < buff.length; i += 4) {
    buff[i + 2] = 255;
  }
};

transforms.blue = bmpData => {
  let buff = bmpData.colorPaletteBuffer;
  for (let i = 0; i < buff.length; i += 4) {
    buff[i] = 255;
  }
};

transforms.green = bmpData => {
  let buff = bmpData.colorPaletteBuffer;
  for (let i = 0; i < buff.length; i += 4) {
    buff[i + 1] = 255;
  }
};

transforms.grayscaleAvg = bmpData => {
  let buff = bmpData.colorPaletteBuffer;
  for(let i = 0; i < buff.length; i += 4) {
    let average = (buff[i] + buff[i + 1] + buff[i + 2]) / 3;
    buff[i] = buff[i + 1] = buff[i + 2] = average;
  }
};

transforms.grayscaleLum = bmpData => {
  let buff = bmpData.colorPaletteBuffer;
  for(let i = 0; i < buff.length; i += 4) {
    let luminosity = ((buff[i] * 0.07) + (buff[i + 1] * 0.72) + (buff[i + 2] * 0.21));
    buff[i] = buff[i + 1] = buff[i + 2] = luminosity;
  }
};

transforms.invert = bmpData => {
  let buff = bmpData.colorPaletteBuffer;
  for(let i = 0; i < buff.length; i += 4) {
    buff[i] = 255 - buff.readInt8(i);
    buff[i + 1] = 255 - buff.readInt8(i + 1);
    buff[i + 2] = 255 - buff.readInt8(i + 2);
  }
};

module.exports = (bmpData, myTransforms) => {
  for(let transform of myTransforms) {
    if (!Object.keys(transforms).includes(transform))
      throw new Error(`"${transform}" is not the name of a valid transformation.`);
    transforms[transform](bmpData);
  }
};
