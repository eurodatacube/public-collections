require('jest')
const fs = require('fs');
const path = require('path');

const jsonDir = './_output/stac/';

let testif;
let files;

if (isExistingDirectory(jsonDir)) {
    testif = test
    files = fs.readdirSync(jsonDir);
} else {
    testif = test.skip
    files = []
}

files.forEach((file) => {
    testif(`Should parse ${file} in STAC folder as JSON.`, () => {
        const buffer = fs.readFileSync(path.join(jsonDir, file));
        expect(isValidJSON(buffer)).toBe(true)
    })
})

test.skip("Workaround to have at least one test available at all times", () => true)

function isExistingDirectory(directory) {
    try {
        fs.readdirSync(directory);
    } catch (error) {
        return false
    }
    return true
}

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