'use strict';

// const bitmap = require('./lib/bitmap');
const readImg = require('./lib/read-img');

readImg.getFile(`${__dirname}/__test__/assets/house.bmp`, (error, data) => {
  if(error) {
    console.error(error);
    return;
  }

  const bitmapProps = data;
  console.log(bitmapProps);
});
