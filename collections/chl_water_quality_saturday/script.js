//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["chl", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}

function evaluatePixel(sample) {

  var arr = colorBlend(sample.chl,    [-100, -38.32, 33.33, 72.55, 100],    [[0,0,0,],[0,0,255],[0,154,87],[251,208,99],[214,130,49] ]); 
 // var arr = colorBlend(sample.chl,    [0, 30.5882, 66.667, 86.2745, 100],    [[0,0,0,],[0,0,1],[0,154,87],[251,208,99],[214,130,49] ]); 
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}
