transImg.transFile(`${__dirname}/__test__/assets/house.bmp`, (error, data) => {
  if(error) {
    console.error(error);
    return;
  }
  let colorTable = data.colorTable;
  for(let i = 0; i < colorTable.length; i+=4){
    colorTable[i+1] = 0;
  }
  return colorTable;
});
