'use strict';

const fs = require('fs');
const parser = require('./lib/parser');
const transform = require('./lib/transform');
const infile = process.argv[2];
const outfile = process.argv[3];
const transforms = process.argv.splice(4);

const modifyBmp = (infile, outfile, transforms) => {
  fs.readFile(`${__dirname}/__test__/assets/${infile}`, (error, data) => {
    if(error){
      console.error(`\nInput file ${infile} does not exist in directory ${__dirname}/__test__/assets/`);
      return;
    }

    let bmpMeta = parser(data);
    transform(bmpMeta, transforms);

    fs.writeFile(`${__dirname}/__test__/assets/${outfile}`, bmpMeta.buffer, (error) => {
      if(error) {
        console.error(`\n${error}`);
        return;
      }
      console.log(`\n${infile} has undergone the following transforms:\n\t${transforms.join('\n\t')}\nThe file has been saved in the same folder as ${outfile}.`);
    });
  });
};

let message = '\nYou must include at least one transform as a command line argument.';

transforms.length > 0 ? modifyBmp(infile, outfile, transforms) : console.error(message);
