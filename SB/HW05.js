var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeFile, 'utf8'));
var primes = primeTable.primes;

var a = function(N){
	var mul = 1;
	for(var i = 0; primes[i] <= N; i++){
		mul *= primes[i];
		var power = Math.pow(primes[i],2);
		for(var j = 0; power <= N; j++){
			mul *= primes[i];
			power *= primes[i];
		}
	}
	return mul;
}

console.log(a(20));