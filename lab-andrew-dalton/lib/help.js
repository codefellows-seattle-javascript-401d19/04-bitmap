'use strict';

const help = module.exports = {};

help.help = () => {
  console.log(`
Welcome to the bmptransform CLI toolset!

Getting started:

The command structure for the bmptransform CLI takes the form of:
$ 'bmptransform <source file> <destination file> <transform command>'

This CLI is designed to work only with BM files (reavealed by the first two bytes in the header of a bmp file).

To pull up this reference guide, type:
$ 'bmptransform help'
at any time.

Accepted tranform commands:

addcontrast:
Reads the levels of the various colors, and maps them at equal distance from each other, increasing the contrast of the image.

bwtransform:
Sets the file to a grayscale based on the image's blue channel.

flipcolors:
Inverts the level of each color; creating a negative/inverse of the image.

randomcolors:
Randomizes each color present in the color table.`
  );
};
