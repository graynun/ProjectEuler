var prime = require("./pTable"),
	base = 600851475143,
	arr = [];

for(var i = 0; i <= prime.primeTable.primes.length; i++){
	if( base % prime.primeTable.primes[i] == 0 ){
		arr.push(prime.primeTable.primes[i]);
	}
}

console.log(arr[arr.length - 1]);