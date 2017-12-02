'use strict';

const useIndex = require(`../index`);
const fs = require('fs');

useIndex.read.fs.writeFile('NEWHOUSE.bmp',data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});