var sum = null;
var	fibonacci = function(f, s, n){
	if( s % 2 == 0) {
			sum += s;
		}
	if(n > 2) {
		this.f = s;
		this.s = f + s;
		n--;	
		return fibonacci(this.f, this.s, n);
	} else if (n > 1) {
		console.log("s: ", s);
	} else {
		console.log("f: ", f);
	}
	console.log("sum: ", sum);
};
console.time("Timer");
fibonacci(1, 2, 32);
console.timeEnd("Timer");

/*

	봉관이 천재

*/

var sum = null;

var fibo = function(n) {
	return Math.round( ( ( Math.pow( ( 1 + Math.sqrt(5)) / 2, n-1 ) * ( ( 3 + Math.sqrt(5) ) / 2 ) ) - ( Math.pow( ( 1 - Math.sqrt(5)) / 2, n-1 ) * ( ( 3 - Math.sqrt(5) ) / 2 ) ) ) /  Math.sqrt(5) );
};

var even = function(n) {
	var fi = fibo(n);
	if( n >= 2 && fi < 4000000 ){
		if( fi % 2 == 0 ){
			sum += fi;
			this.n = n - 3;
			return even(this.n);
		} else {
			this.n = n - 1;
			return even(this.n);
		}
	}
	console.log(sum);
}

console.time("Timer");
even(32);
console.timeEnd("Timer");