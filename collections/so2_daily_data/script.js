//VERSION=3

function setup() {
return {
input: ["so2", "dataMask"],
output: { bands: 4,
sampleType: "UINT8" }
};
}

function evaluatePixel(sample) {

  var arr = colorBlend(sample.so2,    [0,1,2,3,4, 8 , 12, 16 , 20],    
  [[248,246,244],[158,97,168],[83,102,182],[60,140,198],[81,172,162], [227,166,37], [235,73,14], [186,0,6], [116,18,13] ]); 
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}
