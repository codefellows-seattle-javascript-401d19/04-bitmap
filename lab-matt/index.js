'use strict';

const fs = require('fs');

console.log(`${__dirname}/__test__`);

console.log( fs.readFileSync(`${__dirname}/__test__/assets/bitmap.bmp`) );