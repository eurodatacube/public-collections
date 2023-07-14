//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["waterTemperature", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}

 

function evaluatePixel(sample) {

 

  var arr = colorBlend(sample.waterTemperature,    [270, 275, 280, 285, 290, 295, 300 , 305, 310],    [[39,79,133,],[86,141,186], [128,174,207], [197,219,233],[246,246,246],[243,211,192],[227,164,142],[183,83,74],[129,32,40] ]); 
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}
