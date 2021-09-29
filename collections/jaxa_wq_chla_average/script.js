//VERSION=3
function setup() {
    return {
      input: [{
        bands: ["chla_ave", "dataMask"], // this sets which bands to use
      }],
      output: { // this defines the output image type
         bands: 4 ,
         sampleType: "AUTO"
      }
    };
  }
  const colorRamp = 
  [[50,0x3A5FFF],
  [75,0x30B0FF],
  [100,0x7FFEFF],
  [125,0x96E7A3],
  [150,0xFDFF80],
  [175,0xFF8203],
  [200,0xB73700]]
  var viz = new ColorRampVisualizer(colorRamp);
  function evaluatePixel(sample) {
      return [...viz.process(sample.chla_ave), sample.dataMask]
  } 
         