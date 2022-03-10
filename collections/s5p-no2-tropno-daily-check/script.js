//VERSION=3

function setup() {
return {
input: ["tropno2", "dataMask"],
output: { bands: 4,
sampleType: "UINT8" }
};
}

function evaluatePixel(sample) {
var val = sample.tropno2;
if (val>600) return [0,0,0,0]; // no data values
var result= colorBlend(val,
[0,45,90,135,180],//,254 ],
[[253,243,237,30], // 0
[248,210,192,90], // 45
[236,115,82,160], // 90
[213,43,34,240], // 135
[93,19,15,250],// 180
//[30,15,15,180], // 254
]);
//result.push(180); //transparency level
return result;
}  
