var fs = require('fs'),
	path = require('path'),
	fileName = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(fileName, 'utf8'));

exports.primeTable = primeTable;

exports.isPrime = function(n) {
	if(n % 1000 === 0) console.log(n);

	if(n > primeTable.N) {
		exports.makePrimeTable(n);
		primeTable = JSON.parse(fs.readFileSync(fileName, 'utf8'));
	}

	if(primeTable.primes.indexOf(n) !== -1) {
		return true;
	} else {
		return false;
	}
};

exports.makePrimeTable = function(n) {
	var primeTable = JSON.parse(fs.readFileSync(fileName, 'utf8')),
		ret = {};

	if(primeTable.N >= n) return;

	ret.N = n;

	for(var i = primeTable.primes[primeTable.primes.length - 1] + 1; i <= n; i++) {
		if(isPrimeByList(i, primeTable.primes)) {
			primeTable.primes.push(i);
		}
	}

	ret.primes = primeTable.primes;

	fs.writeFileSync(fileName, JSON.stringify(ret), 'utf8');
};

var isPrimeByList = function(n, primes) {
	var sqrtn = Math.sqrt(n);

	for(var i = 0; i < primes.length && primes[i] <= sqrtn; i++) {
		var p = primes[i];
		if(n % p === 0) return false;
	}

	return true;
};

exports.factorize = function(n) {
	exports.makePrimeTable(n);

	var ret = {},
		primeTable = JSON.parse(fs.readFileSync(fileName, 'utf8')),
		nowN = n;

	primeTable.primes.forEach(function(val) {
		var f = exports.factorExp(nowN, val);

		if(f[0] === 0) return;

		ret[val] = f[0];
		nowN = f[1];
	});

	return ret;
};

exports.factorExp = function(n, p) {
	var nowN = n,
		cnt = 0;

	for(;;) {
		if(nowN % p === 0) {
			cnt++;
			nowN /= p;
		} else {
			break;
		}
	}

	return [cnt, nowN];
};
