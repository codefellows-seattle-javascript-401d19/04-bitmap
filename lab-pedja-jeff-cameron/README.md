# Code 401 lab

## Developers
Cameron Moorehead, Pedja Josifovic, Jeff Kusowski

## Purpose
The purpose of this lab is to learn asynchronous function calls using Test Driven Development (TDD) when writing code.  The user requirement was to write code that allows a user to use the CLI to invoke a set of functions that take in a user supplied bitmap, perform one of three transforms, and write the new file to a user supplied location.  We are using jest.js to test our code.

## File Structure
index.js contains the references to the other modules.  There are three module files located in the lib folder.  There are three files in the __test__ folder which test the functions included in the modules in the lib folder.  There are also four files in the assets folder.

## read-img module
This module reads the file supplied by the user.  It takes in a filepath and a callback.  It passes the file through a constructor which creates an object and attaches a buffer of the entire file and several other values of the file as properties to the object.  Of note, the color table is taken from the buffer via the slice() method of node.  The color table will be used by the trans-img module.  The object is returned to index.js.  

## trans-img module
trans-img contains three functions which transform the bitmap that is passed to it.  It takes in the object created by the read-img module and a callback.  The transforms it can perform are greyscale, invert, and acid.  It accomplishes the transforms by changing the values in the color table on the object passed to it.  Due to how the node.js slice method works, changing the color table also changes those same values in the buffer.  Following the transform, the object is passed back to index.js.

## write-img module
write-img contains one function which writes the file to the filepath supplied by the user.  It takes in the object containing the bitmap data, the output filepath, and a callback.  It only returns a success or failure to index.js.
