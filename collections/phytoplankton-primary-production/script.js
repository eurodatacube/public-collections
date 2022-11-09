//VERSION=3

function setup() {
  return {
    input: ["pp", "dataMask"],
    output: { bands: 4 }
  };
}

const palette = [[0,0xffffff],[25,0xdfbfff],[50,0x8228C8],[100,0x3955FE],[200,0x20CCFC],
                 [300,0x5CFFC8],[400,0xB5FF8C],[500,0xFCF15B],[600,0xFDBA14],
                 [700,0xFF7A01],[800,0xE24500],[900,0xB00000],[1000,0x900000]];

function evaluatePixel(sample) {

//  return sample.pp < 10000?[sample.pp/1000, sample.pp/1000, sample.pp/1000, 1]: [0,0,0,0]

  
  const visualizer = new ColorMapVisualizer(palette);

  if (sample.dataMask === 0 || sample.pp > 10000){
    return [0,0,0,0];
  } else {
    let rgb = visualizer.process(sample.pp)


    return [rgb[0], rgb[1], rgb[2], 1]
  }
}
