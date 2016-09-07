/* 
file in current dir	 : node index.js output.json 
file & specified dir : node index.js output.json c:\
*/
const fs = require('fs');
const through2 = require('through2');

var cmdArg = process.argv.slice(2,4);
var dir = (cmdArg[1] === undefined) ? __dirname + '/' : cmdArg[1];
var file = (cmdArg[1] === undefined) ? cmdArg[0] : dir + cmdArg[0];

fs.createReadStream(file)
.pipe(through2(function (chunk, enc, callback) {
	this.push(chunk)
	callback()
})).pipe(process.stdout);