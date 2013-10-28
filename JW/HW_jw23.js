var factors = require('../SY/prime/factors').factors,
	arr = [],
	all = 0;
console.time('a');
var sumOfDivisor = function(n) {
	var f = factors[n];

	var pro = 1;
	for ( var key in f) {	
		var sum = 0;
		for (var i = f[key]; i >= 0; i--){
			sum += Math.pow(parseInt(key), i);
		}
		pro *= sum;
	}

	return (pro - n);
};

for ( var i = 1; i <= 28123; i++) {
	var a = sumOfDivisor(i);
	if ( a > i ) {
		arr.push(i);
	}
	all += i;
}

var dd = {},
	sum = 0;

for (var i in arr) {
	for(var j in arr) {
		if( (arr[i]+arr[j]) > 28123){
			break;
		} else {
			dd[arr[i]+arr[j]] = arr[i]+arr[j];
		}	
	}
}

for( var i in dd ){
	sum += dd[i];
}

console.log(all-sum);
console.timeEnd('a');