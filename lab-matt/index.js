'use strict';

const fs = require('fs');
const bitmap = require('./lib/bitmap');
let files = fs.readdirSync('./__test__/assets/');

bitmap.bufferFile(files[3], 'grayscale');

let myCLI = function(input_file_path, output_file_path, transform_name) {

};