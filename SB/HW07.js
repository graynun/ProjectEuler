var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeFile, 'utf8'));

var arr = primeTable.primes;

console.log(arr[10000]);