const fs = require('fs');
const through2 = require('through2');
const path = require('path');
const ERR = 'File does not exist!';

var file = (path.resolve(process.argv[2]));
fs.access(file, (err) => { if (err)  throw ERR });

fs.createReadStream(file)
.pipe(through2(function(chunk, enc, callback) {
	this.push(chunk)
	callback()
})).pipe(process.stdout);
