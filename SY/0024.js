var factMax = 9,
	N = 1000000;
/*var factMax = 2,
	N = 4;*/

var factTable = [];

var fact = function(n) {
	if(n === 0) return 1;

	return n * fact(n - 1);
};

for(var i = 0; i <= factMax; i++) {
	factTable.push(fact(i));
}

var baseByFact = function(n) {
	var nowfactMax = n,
		ret = [];

	for(var i = factMax; i >= 0; i--) {
		var value = Math.floor(nowfactMax / factTable[i]);

		ret.push(value);
		nowfactMax -= value * factTable[i];
	}

	return ret;
};

//console.log(baseByFact(N - 1));

var numbers = [];

for(var i = 0; i <= factMax; i++) {
	numbers.push(i);
}

var result = "",
	arr = baseByFact(N - 1);

arr.forEach(function(val) {
	result += numbers[val];
	numbers.splice(val, 1);
});

console.log(result);
