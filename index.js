/* 
file in current dir	 : node index.js output.json 
file & specified dir : node index.js output.json c:\
*/
const fs = require('fs');
const through2 = require('through2');
const path = require('path');

var cmdArg = process.argv.slice(2,3);
var file = path.resolve(process.cwd(), cmdArg[0]);


fs.createReadStream(file)
.pipe(through2(function (chunk, enc, callback) {
	this.push(chunk)
	callback()
})).pipe(process.stdout);