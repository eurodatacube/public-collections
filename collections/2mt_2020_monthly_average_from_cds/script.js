//VERSION=3
function setup() {
  return {
    input: [{
      bands: ["AIR2MT", "dataMask"], // this sets which bands to use
    }],
    output: { // this defines the output image type
      bands: 4,
      sampleType: "UINT8"
    }
  };
}

function evaluatePixel(sample) {

  var arr = colorBlend(sample.AIR2MT,    [210, 230, 250, 270, 290, 310, 330],    [[44,89,150,],[97,154,195],[188,214,230],[246,246,246],[242,200,176],[204,110,90],[146,36,45] ]); 
 // var arr = colorBlend(sample.chl,    [0, 30.5882, 66.667, 86.2745, 100],    [[0,0,0,],[0,0,1],[0,154,87],[251,208,99],[214,130,49] ]); 
  if (sample.dataMask==1)  arr.push(255);
  else arr.push(0);
  return arr;
}
