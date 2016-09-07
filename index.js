const fs = require('fs');
const through2 = require('through2');
const path = require('path');
const ERR = 'File does not exist!';

var cmdArg = process.argv.slice(2,3);	
var file = (arg) => {
	if (path.isAbsolute(arg)) {	
		fs.access(arg, (err) => if (err) throw ERR);
	} else {
		fs.access(path.resolve(process.cwd(), arg), (err) => if (err) throw ERR);	
	}
	return arg;
}

fs.createReadStream(file(cmdArg[0]))
.pipe(through2((chunk, enc, callback) => {
	this.push(chunk)
	callback()
})).pipe(process.stdout);
