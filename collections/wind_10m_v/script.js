//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["windv10m", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}

function evaluatePixel(sample) {

  var arr = colorBlend(sample.windv10m,    [-12, -8, -4, -2, 0, 2, 4, 8, 12],    [[11,53,135,],[11,116,197],[78,181,250],[171,234,243],[244,252,237],[251,212,95,],[247,133,0],[221,24,0],[163,1,0] ]); 
 // var arr = colorBlend(sample.chl,    [0, 30.5882, 66.667, 86.2745, 100],    [[0,0,0,],[0,0,1],[0,154,87],[251,208,99],[214,130,49] ]); 
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}
