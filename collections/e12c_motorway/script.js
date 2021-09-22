//VERSION=3
function setup() {
  return {
    input: ["MotorwayActivity", "dataMask"],
    mosaicking: Mosaicking.TILE,
    output: {
      bands: 4,
      sampleType: "UINT8"
    }
  }
};
function evaluatePixel(samples,scenes) {
  
  for (let i = 0; i < samples.length; i++) {
    let sample = samples[i];
    var val = sample.MotorwayActivity;
    var result= colorBlend(val,
[0,5,20,50,90],//,254 ],
[[0,0,0,0], // 0
[154,205,50,180], // 5
[50,205,50,180], // 20
[255,165,0,200], // 50
[255,0,0,200],// 90
]);
    if (sample.dataMask == 1) {
      return result;
    }
  }
  return[0,0,0,0];
}