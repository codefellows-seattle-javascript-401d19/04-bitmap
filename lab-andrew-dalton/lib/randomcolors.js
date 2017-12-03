'use strict';

const randomColors = module.exports = {};

randomColors.transform = parsedBuffer => {
  if (parsedBuffer.pixelTableOffset === 54){
    const colorArray = [];
    // let b = 0;
    for (let i = 54; i < parsedBuffer.buffer.length; i++){
      // parsedBuffer.buffer.writeUInt8(b, i);
      // b++;
      // if (b === 255) b = 0;
      if (colorArray.indexOf(parsedBuffer.buffer[i]) === -1){
        colorArray.push(parsedBuffer.buffer[i]);
      }
    }
    const mappedArray = colorArray.map(() => {
      return Math.floor(Math.random() * 256);
    });
    for (let i = 54; i < parsedBuffer.buffer.length; i++){
      parsedBuffer.buffer.writeUInt8(mappedArray[
        colorArray.indexOf(parsedBuffer.buffer[i])
      ], i);
    }
  } else {
    const blueArr = [];
    const greenArr = [];
    const redArr = [];

    parsedBuffer.colorTable.forEach((value, index) => {
      if (index % 4 === 0){
        if (blueArr.indexOf(value) === -1){
          blueArr.push(value);
        }
      }
      if (index % 4 === 1){
        if (greenArr.indexOf(value) === -1){
          greenArr.push(value);
        }
      }
      if (index % 4 === 2){
        if (redArr.indexOf(value) === -1){
          redArr.push(value);
        }
      }
      // parsedBuffer.colorTable.writeUInt8((255 - value), index);
    });

    const blueMap = blueArr.map(() => {
      return Math.floor(Math.random() * 256);
    });
    const greenMap = greenArr.map(() => {
      return Math.floor(Math.random() * 256);
    });
    const redMap = redArr.map(() => {
      return Math.floor(Math.random() * 256);
    });

    parsedBuffer.colorTable.forEach((value, index) => {
      if (index % 4 === 0){
        parsedBuffer.colorTable.writeUInt8(blueMap[blueArr.indexOf(value)], index);
      }
      if (index % 4 === 1){
        parsedBuffer.colorTable.writeUInt8(greenMap[greenArr.indexOf(value)], index);
      }
      if (index % 4 === 2){
        parsedBuffer.colorTable.writeUInt8(redMap[redArr.indexOf(value)], index);
      }
    });
  }
  return parsedBuffer;
};
