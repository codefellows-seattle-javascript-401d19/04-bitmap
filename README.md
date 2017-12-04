In your README.md describe the exported values of each module you have defined. Every function description should include it's arity (expected number of paramiters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.

# bitmapper:
airity: 4, inputPaths(array), outputPaths(array), transformName(string), callback
## Contains:
## writer:
A recursive function that takes in file paths for file locations, file paths for the where the files should be ouput and the type of transformation the user wants to complete on the bmp image.

### limitations:
only useful in the CLI, but filepaths and transform name have to be changed in the JS file.Does not work with a bmp image that does not have a color table yet :/

### behavior:
throws general built in errors to the fs modules, but also makes sure that filepaths are not bad paths.

### Writer calls:
1. parseFilesRecursively which uses fs.readFile, which uses bitmap.parsedBitmap to parses the bmp images to create buffers for proper editing. These are then pushed into a results array.
2. Once the inputpaths array is empty the transform function is called and uses the results array and outputPaths to modify the buffer for each file.
3. Each transform writes it's own files to the outputh path that is passed to it.

## parseFilesRecursively:
airity 0

## fs.readFile:
airity 2, filepaths (string), callback

## bitmap.parsedBitmap:
airity 1, data(buffer), constructor, return object

## invert.invert:
airity 3, objectArray(array), outputPaths(array), callback

## greyscale.greyscale:
airity 3, objectArray(array), outputPaths(array), callback

## chaos.chaosp:
airity 3, objectArray(array), outputPaths(array), callback
