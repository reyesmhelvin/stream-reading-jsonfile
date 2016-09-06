const fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/package.json');
var data = '';
readStream.on('data', (chunk) => {
	data+=chunk;
});
readStream.on('end', () => {
	console.log(data);
})

