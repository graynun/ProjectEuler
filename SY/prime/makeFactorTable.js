var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeFile, 'utf8')),
	factorFile = path.join(__dirname, 'factors.json'),
	factorTable = {},
	factorize,
	factorExp;

factorTable.N = 100000;
factorTable.factors = [{}, {}];

exports.factorize = factorize = function(n) {
	var ret = {},
		nowN = n,
		sqrtn = Math.sqrt(n);

	if(primeTable.primes.indexOf(n) !== -1) {
		ret[n] = 1;
		return ret;
	}

	for(var i = 0; i < primeTable.primes.length; i++) {
		var thePrime = primeTable.primes[i];

		if(thePrime > sqrtn) break;

		var f = factorExp(nowN, thePrime);
		if(f[0] === 0) continue;

		ret[thePrime] = f[0];
		nowN = f[1];
	}

	if(nowN !== 1) {
		ret[nowN] = 1;
	}

	return ret;
};

exports.factorExp = factorExp = function(n, p) {
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

for(i = 2; i <= factorTable.N; i++) {
	if(i % 1000 === 0) console.log(i);
	factorTable.factors.push(factorize(i));
}


fs.writeFileSync(factorFile, JSON.stringify(factorTable), 'utf8');
