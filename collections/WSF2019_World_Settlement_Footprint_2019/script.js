//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["WSF2019", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}
 


function evaluatePixel(sample) {

  var arr = colorBlend(sample.WSF2019,    [255],    [[0,0,0]]); 
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}