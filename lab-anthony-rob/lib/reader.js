'use strict';

const fs = require('fs');

module.exports = (path, callback) => {
  fs.readFile(path, (error, data) => {
    if (error){
      callback(error);
      return;
    }
    callback(null, data);
  });
};
