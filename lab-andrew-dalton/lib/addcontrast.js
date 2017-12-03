'use strict';

const addContrast = module.exports = {};

addContrast.transform = parsedBuffer => {
  if (parsedBuffer.pixelTableOffset === 54){
    const colorArray = [];
    for (let i = 54; i < parsedBuffer.buffer.length; i++){
      if (colorArray.indexOf(parsedBuffer.buffer[i]) === -1){
        colorArray.push(parsedBuffer.buffer[i]);
      }
    }
    colorArray.sort((a, b) => a - b);
    let divisor = parseInt(255 / (colorArray.length - 1));
    console.log(colorArray);
    console.log(divisor);
    const mappedArray = colorArray.map((e, i) => {
      return divisor * i;
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
    });

    blueArr.sort((a, b) => a - b);
    greenArr.sort((a, b) => a - b);
    redArr.sort((a, b) => a - b);

    let blueDiv = parseInt(255 / (blueArr.length - 1));
    let greenDiv = parseInt(255 / (greenArr.length - 1));
    let redDiv = parseInt(255 / (redArr.length - 1));

    const blueMap = blueArr.map((e, i) => {
      return blueDiv * i;
    });
    const greenMap = greenArr.map((e, i) => {
      return greenDiv * i;
    });
    const redMap = redArr.map((e, i) => {
      return redDiv * i;
    });

    if (blueArr.length < 256){
      parsedBuffer.colorTable.forEach((value, index) => {
        if (index % 4 === 0){
          parsedBuffer.colorTable.writeUInt8(blueMap[blueArr.indexOf(value)], index);
        }
      });
    }
    if (greenArr.length < 256){
      parsedBuffer.colorTable.forEach((value, index) => {
        if (index % 4 === 1){
          parsedBuffer.colorTable.writeUInt8(greenMap[greenArr.indexOf(value)], index);
        }
      });
    }
    if (redArr.length < 256){
      parsedBuffer.colorTable.forEach((value, index) => {
        if (index % 4 === 2){
          parsedBuffer.colorTable.writeUInt8(redMap[redArr.indexOf(value)], index);
        }
      });
    }
  }
  return parsedBuffer;
};
