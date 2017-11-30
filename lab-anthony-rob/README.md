# Code Fellows: Code 401d19: Full-Stack JavaScript
## Lab 03: Asynchronous Callbacks / Parallel File Processing
#### 11/29/17 - Robert Reed

### reader.js
reader.js exports a single function, `readFiles(paths, callback)`, that reads any number of files and pushes their contents, in order, to an array. 

`paths` must be an array (there is no type check) containing the absolute paths to the files you would like to read. 

If the file at a specified path does not exist, an error object is returned. 

`callback` must be a function (again, no type checking) and should be in the following form: 

```
(error, data) => {
  if(error)
    // handle error
  // do something with data
}
``` 

`callback` should both handle the error object, as well as determine what to do with the final array.

`readFiles()` is recursive, so be wary of memory usage.