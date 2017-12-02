'use strict';

const bwtransform = module.exports = {};

bwtransform.transform = parsedBuffer => {
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
    colorArray.sort((a, b) => a - b);
    console.log(colorArray);
    let divisor = parseInt(255 / colorArray.length);
    const mappedArray = colorArray.map((e, i) => {
      return divisor * i;
    });
    console.log(mappedArray);
    for (let i = 54; i < parsedBuffer.buffer.length; i++){
      parsedBuffer.buffer.writeUInt8(mappedArray[
        colorArray.indexOf(parsedBuffer.buffer[i])
      ], i);
    }
  } else {
    parsedBuffer.colorTable.forEach((value, index, array) => {
      // console.log(index, value);
      // if (index % 4 === 0) console.log(index, value);
      if (index % 4 !== 0){
        // console.log(value);
        // if (index % 4 === 2){
        //   parsedBitmap.colorTable.writeUInt8(array[index - 1], index);
        // }
        // if (index % 4 === 3){
        //   parsedBitmap.colorTable.writeUInt8(array[index - 2], index);
        // }
        // console.log(parsedBitmap.colorTable[index]);
        if (index % 4 === 1){
          parsedBuffer.colorTable.writeUInt8(array[index - 1], index);
        }
        if (index % 4 === 2){
          parsedBuffer.colorTable.writeUInt8(array[index - 2], index);
        }
        if (index % 4 === 3){
          parsedBuffer.colorTable.writeUInt8(array[index - 3], index);
        }
        // console.log(index, parsedBitmap.colorTable[index]);
      }
    });
  }
  return parsedBuffer;
};
