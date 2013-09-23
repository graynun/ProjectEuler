var fs = require('fs'),
	path = require('path'),
	primeNumber = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeNumber, 'utf8'));

exports.primeTable = primeTable;