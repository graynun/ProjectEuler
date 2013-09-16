var wordTable = {
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety",
		100: "one hundred",
		1000: "one thousand"
	};

var toWord = function(n) {
	if(wordTable.hasOwnProperty(n.toString())) {
		return wordTable[n];
	}

	if(n > 100) {
		if(n % 100 === 0) {
			return toWord(n / 100) + " " + toWord(100).slice(4);
		} else {
			return toWord(Math.floor(n / 100) * 100) + " and " + toWord(n % 100);
		}
	}

	return toWord(Math.floor(n / 10) * 10) + "-" + toWord(n % 10);
};
/*
console.log(toWord(7));
console.log(toWord(35));
console.log(toWord(60));
console.log(toWord(100));
console.log(toWord(152));
console.log(toWord(270));
console.log(toWord(600));
console.log(toWord(605));
console.log(toWord(891));
console.log(toWord(1000));
*/

var sum = 0,
	N = 1000;

for(var i = 1; i <= N; i++) {
	sum += toWord(i).replace(/-/g, "").replace(/ /g, "").length;
}

console.log(sum);
