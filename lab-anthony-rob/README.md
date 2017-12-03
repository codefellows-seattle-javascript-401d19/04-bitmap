# Code Fellows: Code 401d19: Full-Stack JavaScript
## Lab 04: Bitmap Transformer
#### 11/30/17 - Anthony Robinson & Robert Reed


Usage: run in terminal `node index.js <input file name> <desired output file name> <transformation>`

`<input file name>` must exist in the __test__/assets folder
`<desired output file name>` will be generated in the __test__/assets folder
`<transformation>` must exist in the below Transformations list.

Transformations:
grayscaleAvg
grayscaleLum
invert

example: node index.js bitmap.bmp bitmap-output.bmp grayscaleAvg

The user also has the ability to run multiple transforms

example: node index.js bitmap.bmp bitmap-output.bmp grayscaleAvg invert grayscalLum etc..

Modules:

parser.js - exports a function that returns an object based off of buffer data which is read from index.js.
  It has an arity of one and it accepts a buffer as it's argument. The parser will not return an odject if
  incomplete buffer data is used.

transform.js - exports buffer data based on the transforms used. It has an arity of one and it accepts any
  number of valid transform strings otherwise it throws an error when the transform string does not exist.

index.js - utilizes fs.readFile to read a buffer from a file which parser.js uses. When the buffer is
  passed back to index from transform.js it writes the file based on the CLI input from the user.

Transformation algorithm source:
https://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/
