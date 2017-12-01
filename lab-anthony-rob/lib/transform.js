'use strict';

const transforms = [];

let toGrayscale = bmpData => {
  let newBuffer = Buffer.from(bmpData.buffer);
  
  return newBuffer;
};

transforms.push(toGrayscale);

module.exports = (bmpData, transformIndex) => {
  return transforms[transformIndex](bmpData);
};