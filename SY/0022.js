var fs = require("fs"),
	rawData = fs.readFileSync("ProblemData/0022.txt", "utf8"),
	data = JSON.parse("[" + rawData + "]").sort();

var toScore = function(name) {
	var sum = 0;

	for(var i = 0; i < name.length; i++) {
		sum += name.charCodeAt(i) - 64;
	}

	return sum;
};

var ret = 0;

data.forEach(function(val, i, arr) {
	ret += (i + 1) * toScore(val);
});

console.log(ret);
