//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["cargo", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}

function evaluatePixel(sample) {


  var arr = colorBlend(sample.cargo,    [0.5, 2, 5 , 10, 20 , 150],    
  [[0,155,143,0],[0,219,0],[255,252,0],[244,154,0],[208,19,0], [161,0,0] ]); 
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}
