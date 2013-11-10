var factorial = function(n){
	var fac = 1;
	for(var i=1;i<n+1;i++){
		fac = fac * i;
	}

	return fac;
}


var calculate = function(x, y, n){
	var mul = factorial(x) * factorial(y);
	return factorial(n) / mul;
}


console.time("oops");
<<<<<<< HEAD
console.log(calculate(20, 20, 40));

console.timeEnd("oops");



=======
zconsole.log(calculate(20, 20, 40));
console.timeEnd("oops");
>>>>>>> bb2a89fca24d2bdb5f36e2525c89c4e827c837a3
