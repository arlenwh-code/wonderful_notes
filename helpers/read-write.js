const util = require('util');
const fs = require('fs');

//read files
const readFromFile = util.promisify(fs.readFile);

// write to a file
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );



const notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

// create a uuid
const uuid = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

// read and append a file
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
            console.log(parsedData);
        }
    });
};

// export helpers
module.exports = { readFromFile, uuid, notesData, readAndAppend };