'use strict';

const greyscale = data => {

//With whatever kind of <split>, <map> <for loop>, or whatever other means which is easiest, cleanest, and most robust, modify the Color Palette byte ranges of the incoming <File> object to achieve the desired effect.
  transform.greyscale = (colorTable) => {
    let greyscale;
    for (var i = 0; i < colorTable.length; i+= 4) {
      greyscale = colorTable[i] + colorTable[i + i] + colorTable[i + 2] / 3;
      colorTable[i] = colorTable[i + i] = colorTable[i + 2] = greyscale;
    }
    return colorTable;
  };
  //Write all the byte ranges back into one buffer, and RETURN that buffer.

  const buffer = 0;
  buffer;

  return data;

};

module.export(greyscale);
