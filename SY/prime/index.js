var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeFile, 'utf8')),
	factorFile = path.join(__dirname, 'factors.json'),
	factorTable = JSON.parse(fs.readFileSync(factorFile, 'utf8'));

exports.primeTable = primeTable;
exports.factorTable = factorTable;

exports.isPrime = function(n) {
	if(n > primeTable.N) {
		throw "n is too big";
	}

	if(primeTable.primes.indexOf(n) !== -1) {
		return true;
	} else {
		return false;
	}
};

exports.factorize = function(n) {
	if(n > factorTable.N) {
		throw "n is too big";
	}

	return factorTable.factors[n];
};

exports.numDivisors = function(n) {
	if(n > factorTable.N) {
		throw "n is too big";
	}

	var prod = 1,
		fct = exports.factorize(n);

	for(p in fct) {
		prod *= (fct[p] + 1);
	}

	return prod;
};
