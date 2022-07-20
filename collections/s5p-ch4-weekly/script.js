//VERSION=3

function setup() {
return {
input: ["ch4", "dataMask"],
output: { bands: 4,
sampleType: "UINT8" }
};
}

function evaluatePixel(sample) {

	var arr = colorBlend(sample.ch4,    [0,1680,1740,1800,1830,1860,1910,1920,1950,1980],    
	[[0,0,0,0],[0,1,3,40],[0,108,211,120], [0,210,255,150], [0,255,255,150], [70,255,150,150], [255,253,0,150], [255,193,0,150],[255,73,0,150],[255,0,0,150] ]); 
	if (sample.dataMask==1)  arr.push(255);
	else arr.push(0);
	return arr;
}

