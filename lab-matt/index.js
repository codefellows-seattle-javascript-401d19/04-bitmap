'use strict';

const fs = require('fs');
const bitmap = require('./lib/bitmap');
let files = fs.readdirSync('./__test__/assets/');

bitmap.bufferFile(files[2], 'randomize', (err) => console.log('index.js~7_error:', err));
console.log( fs.readFileSync(`${__dirname}/__test__/assets/bitmap.bmp`) );

let myCLI = function(input_file_path, output_file_path, transfrom_name) {

};