# 04: Bitmap
Description: **Lab 04 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **12/02/17**

### `bitmap.bufferFile`
has an arity of three that takes in a filePath, transformation type, and a destination, and rewrites the file with the transformation type into the location that was specified.

### `bitmap.createBufferObject`
has an arity of one, which is the read bmp file and creates an object out of that file that has multiple properties pertaining to the buffer

### `transform.invertColors`
has an arity of one that takes in the colorPalette of the buffer object and redefines it by taking the difference of the current color and 255 which in turn inverts the colors 

### `transform.randomize`
has an arity of one that takes in the colorPalette of the buffer object and redefines it by creating a random number between 0 and 255 and subtracting the rgb values of the colorPalette from the respective random number

### `transform.grayscale`
has an arity of one that takes in the colorPalette of the buffer object and redefines it by setting each red, green, and blue value to the same