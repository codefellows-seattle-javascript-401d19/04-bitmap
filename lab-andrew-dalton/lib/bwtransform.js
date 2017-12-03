'use strict';

const bwTransform = module.exports = {};
// const PIXEL_TABLE_OFFSET = 10;


bwTransform.transform = parsedBuffer => {
  if (parsedBuffer.pixelTableOffset === 54){
    let divisor = parseInt((parsedBuffer.buffer.length - 54) / 255);
    let counter = 0;
    let color = 0;
    for (let i = 54; i < parsedBuffer.buffer.length; i++){
      if (counter === divisor && color < 255){
        counter = 0;
        color++;
      }
      // let minOrMax = parsedBuffer.buffer[i] <= 127 ? 0 : 255;
      // let randomNum = Math.floor(Math.random() * 256);
      parsedBuffer.buffer.writeUInt8(color, i);
      counter++;
    }
    // throw new Error('black and white transform can only be performed on 24bit color bmp files with embedded color tables');
  } else {
    parsedBuffer.colorTable.forEach((value, index, array) => {
      if (index % 4 === 0){
        parsedBuffer.colorTable.writeUInt8(index / 4, index);
      }
      if (index % 4 === 1){
        parsedBuffer.colorTable.writeUInt8(array[index - 1], index);
      }
      if (index % 4 === 2){
        parsedBuffer.colorTable.writeUInt8(array[index - 2], index);
      }
    });
  }
  return parsedBuffer;
};
