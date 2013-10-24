var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeFile, 'utf8'));
var primes = primeTable.primes;

var sumOfDivisors = [];

var getDivisors = function(N){
	var divisors = [];
	var max = Math.sqrt(N);
	for(var i = 1; i <= max; i++){
		if(N % i == 0){
			divisors.push(i);
			if( i != N / i ){
				divisors.push(N/i);	
			}
		}
	}
	divisors.sort(function(a,b){ return a-b});
	return divisors;
}

for(var i = 1; i <= 10000; i++){
	var divisors = getDivisors(i);
	var sz = divisors.length;
	var sum = 0;
	for(var j = 0; j < sz-1; j++){
		sum += divisors[j];
	}
	sumOfDivisors[i] = sum;
}

var sumFriends = 0;
for(var i = 1; i <= 10000; i++){
	var temp = sumOfDivisors.slice(0);
	temp.splice(i,1);
	if(temp.indexOf(sumOfDivisors[i]) != -1){
		sumFriends += i;
	}
	if(i == 220 || i == 284){
		console.log('있는데');
	}
}
console.log(sumFriends);