'use strict';

const bitmapTransformer = require(`./lib/bitmapTransformer`);
const imageTransformer = require(`./lib/imageTransformer`);
const indexJS = module.exports = {};

let args = process.argv.slice(2);

imageTransformer.transformImage(args[0], args[1], args.slice(2));
