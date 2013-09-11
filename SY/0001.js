var sum1ToN = function(N) {
	return N * (N + 1) / 2;
};

var sumNProductsToM = function(n, m) {
	return n * sum1ToN(Math.floor((m - 0.01) / n))
}

var ret = function(n) {
	return sumNProductsToM(3, n) + sumNProductsToM(5, n) - sumNProductsToM(15, n);
};

console.time("Problem 1");
console.log(ret(1000));
console.timeEnd("Problem 1");
