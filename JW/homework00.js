

var divNum = function(n) {
	var coins = [1, 4, 5],
		cointrace = [],
		quotient = Math.floor(n / coins[2]),
		reminder = n % coins[2],			
		quotient2 = Math.floor(n / coins[1]),
		reminder2 = n % coins[1];
	
	var loop = function(n, m) {
		for( var i = 0; i < n; i++) {
			cointrace.push(m);	
		}
	}

	if ( n % coins[2] == 0 ) {
		
		loop( quotient, coins[2]);
		console.log(cointrace.length);
		console.log("1", cointrace);
		return;

	}

	if ( n % coins[1] == 0 ) {

		if ( reminder + coins[2] == coins[1] * 2 ) {
			quotient = quotient - 1;
			loop(quotient, coins[2]);			
			loop(2, coins[1]);
			console.log(cointrace.length);
			console.log("2", cointrace);	
			return;
		} 

		if ( reminder == coins[1] ) {
			reminder = 1;
			loop(quotient, coins[2]);			
			loop(reminder, coins[1]);
			console.log(cointrace.length);
			console.log("3", cointrace);
			return;
		}

		if ( (quotient + reminder) <= quotient2 ) {
			loop(quotient, coins[2]);
			loop(reminder, coins[0]);
			console.log(cointrace.length);
			console.log("4", cointrace);
		} else {
			loop(quotient2, coins[1]);
			console.log(cointrace.length);
			console.log("5", cointrace);
		}
		return;

	}

	if ( reminder == coins[1] ) {
		reminder = 1;
		loop(quotient, coins[2]);			
		loop(reminder, coins[1]);
		console.log(cointrace.length);
		console.log("6", cointrace);
		return;
	}

	if ( reminder + coins[2] == coins[1] * 2 ) {
		quotient = quotient - 1;
		loop(quotient, coins[2]);			
		loop(2, coins[1]);
		console.log(cointrace.length);
		console.log("7", cointrace);	
		return;
	}

	loop(quotient, coins[2]);
	loop(reminder, coins[0]);
	console.log(cointrace.length);
	console.log("8", cointrace);
	
};


console.time("dd");
var a = new divNum(97);
console.timeEnd("dd");