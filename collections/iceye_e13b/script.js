//VERSION=3
function setup () {
    return {
        input: ["GRD", "dataMask"],
        output: {bands: 2}
    }
}
function evaluatePixel(samples, scenes) {
  return [samples.GRD*0.15, samples.dataMask]
}