//VERSION=3
function setup() {
    return {
      input: ["extent", "dataMask"],
      output: { bands: 4, sampleType: "UINT8" },
      mosaicking: "TILE"
    };
  }
  
function evaluatePixel(samples) {
    
  if (samples[0].extent == 0 && samples[1].extent !== 0){
    var data = 1;
    var sample = samples[1];
  } else if ((samples[1].extent == 0 && samples[0].extent !== 0)){
    var data = 1;
    var sample = samples[0];
  } else {
    var data = 0;
  }

  if (data !== 0) {
    if (sample.extent == 1){
        return [255, 255, 255, 255];
    } else if (sample.extent == 253){
        return [200, 200, 200, 255];
    } else if (sample.extent == 254){
        return [133, 108, 94, 255];}
    
  } else {
    return [0, 0, 0, 0];

  }
}