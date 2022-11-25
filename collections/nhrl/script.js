//VERSION=3

// This custom script visualises National High Resolution Layer, Hungary

function setup() {
    return {
      input: ["nhrl", "dataMask"],
      output: { 
        bands: 4, 
        sampleType: "AUTO"
      }
    }
  }
  
  const map = [
    [0, 0x282828],   // No input data available
    [111, 0xff0000],  //111 Single-floor buildings
    [112, 0xa80000],  // 112 High buildings
    [12, 0x828282],  // 12 Other paved or non-paved artificial surfaces
    [13, 0x4e4e4e],  // 13 Road Network
    [14, 0x000000],  //	14 Railway network
    [20, 0xe1e1e1],  //	20 Bare soil (natural bare surfaces)
    [21, 0xffbebe],  //	21 Cereals
    [22, 0xffebaf],  // 22 Row crops
    [24, 0xd3ffbe], //  24 Alfalfa
    [25, 0xaaff00], //  25 Rapeseed
    [26, 0xabcd66], // 26 Grassland
    [27, 0xB0643C], // 27 Orchards
    [28, 0xFFAA00], // 28 Vineyards	
    [29, 0xFFFF00], // 29 Heterogeneous vegetated surfaces in built-up environment
    [30, 0x448970], // 30 Shrubland
    [31, 0x19A800], // 31 Broadleaved trees	
    [33, 0x267300], //  33 Coniferous trees
    [35, 0xF5F57A], // 35 Grasslands with shrubs	
    [36, 0xCDF57A], // 36 Heterogeneous grassland with periodic water effect	
    [37, 0x67F070], // 37 Salt steppes and meadows
    [41, 0x73B2FF], // 41 Wetlands
    [43, 0xD69DBC],  // 43 Reeds
    [51, 0x0070FF]  // 51 Water surfaces
      
      
    ];
  
  const visualizer = new ColorMapVisualizer(map);
  
  function evaluatePixel(sample) {
    return [visualizer.process(sample.nhrl)[0], visualizer.process(sample.nhrl)[1], visualizer.process(sample.nhrl)[2], sample.dataMask];
  }
  