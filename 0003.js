var N = 600851475143,
	sqrtN = Math.sqrt(N),
	primes = [2],
	factors = [];

var isPrime = function(n) {
	if(n === 1) return false;

	var sqrtn = Math.sqrt(n);

	for(var i = 0; i < primes.length && i < sqrtn; i++) {
		var p = primes[i];
		if(n % p === 0) return false;
	}
	
	primes.push(n);
	return true;
};

for(var i = 3; i < sqrtN; i++) {
	if(isPrime(i) && N % i === 0) {
		factors.push(i);
	}
}

for(var i = 0; i < factors.length; i++) {
	var f = factors[i],
		prod = N,
		cnt = 0;

	for(;;) {
		if(prod % f === 0) {
			cnt++;
			prod /= f;
		}
		else break;
	}
	console.log(f, cnt);
}
