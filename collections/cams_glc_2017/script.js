//VERSION=3
function setup() {
  return {
    input: ["BLUE", "GREEN", "RED"],
    output: { bands: 4 , sampleType: "UINT8"}
  };
}

function evaluatePixel(sample) {
  if (sample.BLUE === 0 && sample.GREEN === 0 && sample.RED === 0){
    // This means black so return transparent
    return [0, 0, 0, 0];
  } else {
    // Return as normal with a transparency band 
    return [sample.RED, sample.GREEN, sample.BLUE, 255];
}
}  
