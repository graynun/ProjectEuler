// if(false) {

// var rawData = "75\n" +
// 	"95 64\n" +
// 	"17 47 82\n" +
// 	"18 35 87 10\n" +
// 	"20 04 82 47 65\n" +
// 	"19 01 23 75 03 34\n" +
// 	"88 02 77 73 07 63 67\n" +
// 	"99 65 04 28 06 16 70 92\n" +
// 	"41 41 26 56 83 40 80 70 33\n" +
// 	"41 48 72 33 47 32 37 16 94 29\n" +
// 	"53 71 44 65 25 43 91 52 97 51 14\n" +
// 	"70 11 33 28 77 73 17 78 39 68 17 57\n" +
// 	"91 71 52 38 17 14 91 43 58 50 27 29 48\n" +
// 	"63 66 04 68 89 53 67 30 73 16 69 87 40 31\n" +
// 	"04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";

// var data = rawData.split("\n").map(function(val) {
// 		return val.split(" ").map(function(val2) {
// 			return parseInt(val2, 10);
// 		});
// 	});

// var max = -Infinity;

// var cnt = 0;

// var maxSum = function(x, y, sum) {
// 	sum += data[x][y];

// 	if(x === data.length - 1) {
// 		if(sum > max) max = sum;
// 		return;
// 	}

// 	maxSum(x + 1, y, sum);
// 	maxSum(x + 1, y + 1, sum);
// };

// maxSum(0, 0, 0);

// console.log(max);
// }



var fact0 = function(n) {
	console.log('call0');
	if(n == 1) return 1;
	return n * fact0(n - 1);
}

console.log(fact0(5));


var fact1 = function(n, prod) {
	console.log('call1');
	if(n == 1) return prod;
	return fact1(n - 1, prod * n);
};

console.log(fact1(5, 1));


var fact2 = function(max_i, i, prod){
	console.log('call2');
	if (i > max_i){ return prod; }
	else { return fact2(max_i, i+1, prod * i);}
};

console.log(fact2(5,1,1));
