var max = -Infinity;

var isPalindrome = function(n) {
	var str = n.toString();

	for(var i = 0; i < str.length / 2; i++) {
		if(str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}

	return true;
}

for(var i = 100; i < 1000; i++) {
	for(var j = i; j < 1000; j++) {
		if(isPalindrome(i * j)) {
			if(max < i * j) {
				max = i * j;
			}
		}
	}
}

console.log(max);
