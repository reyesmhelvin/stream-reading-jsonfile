const fs = require('fs');
// cmArg = __dirname + /output.json
var cmArg = process.argv.slice(2,3);
var readStream = fs.createReadStream(cmArg[0]);
var writeStream = fs.createWriteStream('writestream.json');
var data = '';
readStream.on('data', (chunk) => {
	data+=chunk;
});
readStream.on('end', () => {
	console.log(data);
})
readStream.pipe(writeStream);
