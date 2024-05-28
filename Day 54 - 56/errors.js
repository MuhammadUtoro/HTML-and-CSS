const fs = require('fs');

function readFile() {
    try {
        fs.readFileSync('data.json');
    } catch {
        console.log('An error occured!');
    }
    console.log('Hi!');
}

readFile();
