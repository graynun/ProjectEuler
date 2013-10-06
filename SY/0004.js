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

for(var i = 999; i >= 100; i--) {
	for(var j = 999; j >= i; j--) {
		if(i % 11 !== 0 && j % 11 !== 0) continue;

		if(max < i * j) {
			if(isPalindrome(i * j)) {
				max = i * j;
			}
		}
	}
}

console.log(max);
