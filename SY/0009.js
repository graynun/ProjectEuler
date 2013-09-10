var N = 500;

var getProduct = function(m, n) {
	return 2 * (Math.pow(m, 4) - Math.pow(n, 4)) * m * n;
};

var getnbym = function(m) {
	return (N - m * m) / m;
};

for(var m = 0; m < Math.sqrt(N); m++) {
	if(N % m === 0) {
		var n = getnbym(m);

		if(m > n) console.log(getProduct(m, n));
	}
}
