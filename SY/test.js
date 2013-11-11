'use strict';

var a = 'i';
var N = 7;
var cnt = 0;

var printIt = function(n) {
	if(n === 1) {
		cnt++;
		return;
	}

	for(var i = 0; i < n; i++) {
		printIt(n-1);
	}
};

printIt(N);
console.log(cnt);
