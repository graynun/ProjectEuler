var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeFile, 'utf8'));

var primes = primeTable.primes;

var sumPrimes = function(N){
	var sum = 0;
	for(var i = 0; primes[i] < N; i++){
		sum += primes[i];
	}
	return sum;
}

console.log(sumPrimes(2000000));