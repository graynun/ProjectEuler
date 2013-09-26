var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = {};

primeTable.N;
primeTable.primes = [2];

var MkArr = function(N){
	primeTable.N = N;
	for(var i = 3 ; i <= N ; i++){
		var sz = primeTable.primes.length;
		for(var j = 0; j < sz; j++){
			if(i % primeTable.primes[j] == 0)	break;
			if(j == sz-1)	primeTable.primes.push(i);
		}
	}
}

MkArr(Math.floor(Math.sqrt(600851475143)));
fs.writeFileSync(primeFile, JSON.stringify(primeTable), 'utf8');