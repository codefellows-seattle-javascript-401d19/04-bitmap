'use strict';

const fs = require('fs');
const greyscale = require('./lib/greyscale');
const invert = require('./lib/invert');
const brighten = require('./lib/brighten');

// Require all three transformation module JS files.

const CLIargs = process.argv.slice(2);

const inputPath = CLIargs[0];
const outputPath = CLIargs[1];
const transform = CLIargs[2];

const transforms = ['greyscale','invert','brighten'];

if ( //Check arguments for invalidity here, throw errors, (HOOK UP TESTS later).
  typeof inputPath !== `string` ||
  typeof outputPath !== `string` ||
  typeof transform !== `string` ||
  !transforms.includes(transform)
){
  throw new Error('One or more CLI arguments are invalid. Please confirm that a Input Path, Output Path, and valid Transformation keyword are passed into the CLI.');
}

//Create the <File> constructor - which takes a buffer, and splits it out into the components which we need to modify (and those that don't), so that we can modify those we need to, then reassemble the entire file later. Will be used lower down in the code.
const File = (bufferIn) => {
  this.headers = bufferIn;
  this.colorTable = bufferIn;
  this.remainder = bufferIn;
}; File;

//Start up the <fs.readFile> here - pass in the path argument, form the callback:
fs.readFile(inputPath, (error, data) => {
  // >> <callback> recieves <error, data>. If error, throw error. If not, take the data (which is currently in Raw Buffer form), pass it into the <file> constructor, then, call the <module.function> which matches the <transform> argument passed into <index.js> from the CLI.

  if (error) {throw error;}

  var bitmap = new File(data);

  switch (transform) {// (...See the mockup file for what the transform modules do...)
  case 'greyscale': bitmap = greyscale(bitmap); break;
  case 'invert' : bitmap = invert(bitmap); break;
  case 'brighten' : bitmap = brighten(bitmap); break;
  }

  // >> <callback> then takes the data returned from the appropriate module function, and calls fs.WriteFile, passing in a path + '_<transform>' and the returned data, and forms a callback;
  fs.WriteFile(outputPath, bitmap, (error) => {
    // >> >> <callback> writes console.logs a friendly message: "BMP transform successful. New file at <new path>. Tranformation type: <transform>."
    if (error) {throw error;}
    console.log(`Bitmap "${transform}" transform successful.\nNew file at ${outputPath}.`);
  });

  // Once the fs.fileWrite operation's callback is finished, the program will close down.
} );
