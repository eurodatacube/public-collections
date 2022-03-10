//VERSION=3
function setup() {
    return {
      input: ["concentration", "dataMask"],
      output: { bands: 4, sampleType: "AUTO" },
      mosaicking: "TILE"
    };
  }
  
  // Set colorbar
  var cbar = [[0,"0xEBF9FF"],
             [10, "0xD1E6F7"],
             [20, "0xB7D4EF"],
             [30, "0x9DC1E7"],
             [40,"0x83AFDF"],
             [50, "0x689CD6"],
             [60, "0x4E8ACE"],
             [70, "0x3477C6"],
             [80, "0x1A65BE"],
             [90, "0x0052B6"]];
  
  // Set ramp
  const visualizer = new ColorRampVisualizer(cbar);
  
  function evaluatePixel(samples) {
    
    if (samples[0].concentration == 0 && samples[1].concentration !== 0){
        var data = 1;
        var sample = samples[1];
    } else if ((samples[1].concentration == 0 && samples[0].concentration !== 0)){
        var data = 1;
        var sample = samples[0];
    } else {
        var data = 0;
    }

    if (data !== 0) {
        var rgb = visualizer.process(sample.concentration / 10);
        rgb.push(1);
      
        if (sample.concentration == 2540){
          return [1, 1, 1, 1];
        } else if (sample.concentration == 2530){
          return [0.5, 0.5, 0.5, 1];
        } else {
          return rgb;
        }
    } else {
        return [0, 0, 0, 0];
    
    }
}