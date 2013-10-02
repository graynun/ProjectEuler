var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeFile, 'utf8'));

var primes = primeTable.primes;

var mkTriangularNum = function(N){
	return N * (N+1) / 2;
}

var findNofDivisor = function(N){
	var factors = factorize(N);
	var keys = Object.keys(factors);
	var sz = keys.length;
	var num = 1;
	for(var i = 0; i < sz; i++){
		num *= (factors[keys[i]] + 1);
	}
	return num;
}

var factorize = function(N){
	var sqrtN = Math.sqrt(N);
	var factors = {};
	for(var i = 0; primes[i] <= sqrtN; i++){
		while(N % primes[i] == 0){
			if(factors[primes[i]] == null){
				factors[primes[i]] = 1;
			}else{
				factors[primes[i]]++;
			}
			N /= primes[i];
		}
		if(N == 1)	break;
	}
	if(N != 1){
		factors[N] = 1;
	}
	return factors;
}

var triN = 0;
var divN = 0;
var i = 1;
while(divN < 500){
	triN = mkTriangularNum(i);
	divN = findNofDivisor(triN);
	i++;
}
console.log(triN);
console.log(divN);
