'use strict';

const transImg = module.exports = {};

transImg.transFile = (transformName, constructedBitmap, callback) => {
  console.log(constructedBitmap.colorTable);

  let colorTable = constructedBitmap.colorTable;

  for(let i = 0; i < colorTable.length; i+=4){
    colorTable[i+2] = 0;
  }
  console.log(constructedBitmap.colorTable);

  callback(null,constructedBitmap);
};
