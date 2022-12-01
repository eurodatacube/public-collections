//VERSION=3 

function setup() {
  return {
    input: [{
      bands: [
        "PNI_1MS",
        "dataMask"
      ]
    }],
    output: {
      bands: 4
    }
  }
}
const pniRamps = [
    [0, 0x800000],
    [0.2, 0xff0000],
    [0.5, 0xffff00],
    [1, 0x00ffff],
    [1.5, 0x0000ff],
    [2, 0x000080]
  ];

const viz = new ColorRampVisualizer(pniRamps);


function evaluatePixel(samples) {
    let val = samples.PNI_1MS;
    if (!isFinite(val)){
      return [0,0,0,0]
    } else {
    valvis = viz.process(val);
    valvis.push(samples.dataMask);
    return valvis;
    }
}


