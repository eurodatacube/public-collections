require('jest')
const fs = require('fs');
const path = require('path');





const jsonDir = './_output/stac/';
const files = fs.readdirSync(jsonDir);




files.forEach((file) => {
    test(`.Should parse ${file} in STAC folder as JSON.`, () => {
        const buffer = fs.readFileSync(path.join(jsonDir, file));
        expect(isValidJSON(buffer)).toBe(true)
    })
})



function isValidJSON(buffer) {
    try {
        const json = JSON.parse(buffer)
        if (typeof json !== 'object') {
            return false
        }
    } catch (error) {
        return false
    }

    return true
} 