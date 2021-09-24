//VERSION=3
function setup() {
  return {
    input: ["RF", "dataMask"],
    output: { bands: 2}
  }
}

function evaluatePixel(samples) {
  return [samples.RF, samples.dataMask]
}  
