//VERSION=3 

function setup() {
  return {
    input: [{
      bands: [
        "SPEI_1MS",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}
const speiRamps = [
    [-2.33, 0x800000],
    [-1.28, 0xff0000],
    [0, 0xffff00],
    [1.28, 0x00ffff],
    [1.65, 0x0000ff],
    [2.33, 0x000080]
  ];

const viz = new ColorRampVisualizer(speiRamps);


function evaluatePixel(samples) {
    let val = samples.SPEI_1MS;
    if (!isFinite(val)){
      return [0,0,0,0]
    } else {
    valvis = viz.process(val);
    valvis.push(samples.dataMask);
    return valvis;
    }
}


