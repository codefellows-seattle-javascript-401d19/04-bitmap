# Lab 4 Bitmap Transformer
## Catherine Looper and Kerry Nordstrom

# Overview

## We created an application to take in command-line arguments (CLI) from the user consisting of node program reference, starter file, an existing .bmp file, the new file name, and one of three established transformations.

### Example
```node index.js house.bmp testhouse.bmp grayscale```

# Exported Modules

## Module: Transform 

    In the transform module, we exported three functions: grayscale, invert, and randomize. These take in values from the parsedBitmap object, which includes the color header indices, which are specifically referenced in each calculation. 

### Grayscale
    The grayscale function looks at each index and resets all of the RGB values to match the first value which turns the image to grayscale.

### Invert
    The invert function looks at each index and subtracts the RGB value from 255 (white) which provides the inverted value.

### Randomize
    The randomize function looks at each index and and subtracts the original index value from a randomly generated number multiplied by 255.  This creates an image with entirely random pixel values.

## Module: Bitmap
    In this bitmap module, we are parsing our bitmap via buffer to assign various offset values to our exported object.  With this, we can pass these "bitmap road maps" to other functionality to change specific values.

### Parse Bitmap
    The parse bitmap function does exactly as described above and takes in buffer information to place specific offset values of our selected bitmap in order to pass this into our functions.
