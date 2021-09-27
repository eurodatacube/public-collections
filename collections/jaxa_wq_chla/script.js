//VERSION=3
function setup() {
    return {
      input: [{
        bands: ["chla", "dataMask"], // this sets which bands to use
      }],
      output: { // this defines the output image type
         bands: 4 ,
         sampleType: "AUTO"
      }
    };
  }
  const colorRamp = [[0,0x003769],
                     [25,0x6DB8D7],
                     [50,0xF8F3F1],
                     [75,0xEB765D],
                     [100,0x8A001C]]
  var viz = new ColorRampVisualizer(colorRamp);
  function evaluatePixel(sample) {
      return [...viz.process(sample.chla), sample.dataMask]
  }    

  
