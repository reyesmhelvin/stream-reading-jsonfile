const fs = require('fs');

var cmArg = process.argv.slice(2,3);
var readStream = fs.createReadStream(cmArg[0]);
var writeStream = fs.createWriteStream('output.json');

readStream.pipe(writeStream);
