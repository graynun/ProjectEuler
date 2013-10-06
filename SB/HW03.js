var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = JSON.parse(fs.readFileSync(primeFile, 'utf8'));

var arr = primeTable.primes;

var SearchArr = function(N){
	var temp1 = [1];
	var temp2 = [N];
	var max = Math.floor(Math.sqrt(N));
	var i = 0;
	while(arr[i] < max){
		if(i >= arr.length)	break;
		if(N % arr[i] == 0){
			temp1.push(arr[i]);
			temp2.push(N/arr[i]);
		}
		i++;
	}
	return [temp1, temp2];
}

var x = SearchArr(600851475143);
var y = SearchArr(x[1][1]);

console.log(x);
console.log(y);

console.log(Math.max(x[0][x[0].length-1], y[0][y[0].length-1]));