//var arr = ['0', '1', '2'];
var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var swap = function(i, j) {
	var a = arr[i];
	arr[i] = arr[j];
	arr[j] = a;
};

var Lexico = function(arr) {
	var cnt = 1,
		lexico = "",
		limit = 1000000;

	while (cnt < limit) {
		var len = arr.length,
			i = len - 1,
			j = len,
			k = len;

		while(arr[i -1] >= arr[i]) {
			i--;
		}

		while(arr[j - 1] <= arr[i - 1]) {
			j--;
		}

		swap(i - 1, j - 1);
		i++;

		while(i < k) {
			swap(i - 1, k - 1);
			i++;
			k--;
		}

		cnt++;
	}

	for (var k = 0; k < arr.length; k++) {
		lexico += arr[k];
	}

	console.log(lexico);
};

Lexico(arr);

