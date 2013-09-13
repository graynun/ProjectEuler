var chooseOverHalf = function(n) {
	var h = n / 2,
		prod = 1;

	for(var i = h; i >= 1; i--) {
		prod *= i + h;
		prod /= i;
	}

	return Math.round(prod);
};

console.log(chooseOverHalf(20 * 2));
