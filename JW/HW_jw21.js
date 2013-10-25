var factors = require('../SY/prime/factors').factors,
	limit = 10000,
	arr = [];

var Amicable = function(n) {
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

for ( var i = 10000; i > 1; i--) {
	var a = Amicable(i);
	var b = Amicable(a);

	if ( b == i && a != i ) {
		arr.push(i);
	}
}

console.log(arr);

var sum = 0;

for ( var j = 0; j < arr.length; j++) {
	sum += arr[j];
}

console.log(sum);






