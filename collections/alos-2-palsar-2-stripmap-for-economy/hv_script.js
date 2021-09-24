//VERSION=3
function setup() {
  return {
    input: ["HV", "dataMask"],
    output: { bands:2 }
  };
}
f = 1/ 30000
function evaluatePixel(sample) {
  return [f*sample.HV, sample.dataMask ];
}  
