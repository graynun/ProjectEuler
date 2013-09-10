var prime = require("./prime"),
	N = 20,
	fctMax = {},
	ret = 1;

for(var i = 1; i < N; i++) {
	var fct = prime.factorize(i);

	for(p in fct) {
		if(fctMax.hasOwnProperty(p)) {
			if(fct[p] > fctMax[p]) fctMax[p] = fct[p];
		} else {
			fctMax[p] = fct[p];
		}
	}
}

for(i in fctMax) {
	ret *= Math.pow(i, fctMax[i]);
}

console.log(ret);
