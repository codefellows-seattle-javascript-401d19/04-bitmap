# Code Fellows: Code 401d19: Full-Stack JavaScript
## Lab 04: Bitmap Transformer
#### 12/3/17 - Anthony Robinson & Robert Reed


## Usage:
run in terminal `node index.js <input file name> <output file name> <transformation 1>...<transformation n>`

`<input file name>` must exist in the __test__/assets folder
`<output file name>` will be generated in the __test__/assets folder
`<transformation>` must exist in the below Transformations list.

## Transformations:
grayscaleSoft  *this is the best of the grayscale transformations
grayscaleAvg
grayscaleLum
invert
red
green
blue

example: node index.js bitmap.bmp bitmap-output.bmp grayscaleAvg

The user also has the ability to run multiple transforms

example: node index.js bitmap.bmp bitmap-output.bmp grayscaleAvg invert grayscaleLum etc..

## Modules:

parser.js - exports a function that returns an object based off of buffer data which is read from index.js.
  It has an arity of one and it accepts a buffer as it's argument. The parser will not return an object if incomplete buffer data is used.

transform.js - exports a function that modifies the buffer data based on the transforms used. It has an arity of one and it accepts any number of valid transform strings wrapped in an array, otherwise it throws an error when the transform string does not exist.

index.js - utilizes fs.readFile to read a buffer from a file which parser.js uses. When the buffer is passed back to index from transform.js it performs the requested transforms and writes the file based on the CLI input from the user.

## Transformation algorithm source:
https://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/
