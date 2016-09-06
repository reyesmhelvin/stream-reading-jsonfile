const fs = require('fs');

var cmArg = process.argv.slice(2,3);
var jsonfile = __dirname + '/' + cmArg[0];
var readStream = fs.createReadStream(jsonfile);
var writeStream = fs.createWriteStream('writestream.json');
var data = '';
readStream.on('data', (chunk) => {
	data+=chunk;
});
readStream.on('end', () => {
	console.log(data);
})
readStream.pipe(writeStream);
