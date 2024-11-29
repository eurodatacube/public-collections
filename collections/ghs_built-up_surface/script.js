//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["BUILT", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}



function evaluatePixel(sample) {
  var arr = colorBlend(sample.BUILT,
    [0, 2500, 5000, 7500, 10000],
    [[20, 7, 138], [124, 8, 169], [203, 71, 120], [246, 154, 67], [251, 250, 144]]);
  if (sample.dataMask == 1) arr.push(255);
  else arr.push(0);
  return arr;
}