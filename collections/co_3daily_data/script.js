//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["co", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}

function evaluatePixel(sample) {

 
  var arr = colorBlend(sample.co,    [0,20,40,60,83,106,129,152,175],    
  [[248,246,244,0],[158,97,168,40],[83,102,182,90],[60,140,198,120],[81,172,162,150], [227,166,37,180], [235,73,14,180], [186,0,6,180], [116,18,13,180] ]); 
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}
