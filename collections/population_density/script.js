//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["populationDensity", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}

function evaluatePixel(sample) {

  var arr = colorBlend(sample.populationDensity,    [1, 5, 25, 250, 1000, 10000],    [[255,242,209],[255,218,166],[250,184,85],[253,141,60],[240,59,32],[189,0,38] ]); 
  //var arr = colorBlend(sample.populationDensity,    [-100, 1, 5, 25, 250, 1000, 10000],    [[0,0,0,0],[255,242,209,255],[255,218,166,255],[250,184,85,255],[253,141,60,255],[240,59,32,255],[189,0,38,255] ]);
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}  
