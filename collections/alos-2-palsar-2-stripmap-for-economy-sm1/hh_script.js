//VERSION=3
function setup() {
  return {
    input: ["HH", "dataMask"],
    output: { bands:2 }
  };
}
f = 1/ 30000
function evaluatePixel(sample) {
  return [f*sample.HH, sample.dataMask ];
}  
