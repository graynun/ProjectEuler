var arr = [1, 2];
var an;
var sum = 0;

var makeArr = function(num) {
	var end = num;
	if(arr[arr.length -1] < end){
		an = arr[arr.length-2] + arr[arr.length-1];
		arr.push(an);
		makeArr(end);
	}else {
		arr.splice(arr.length-1, 1);
	}

	return arr;
}

var findEven = function(arr) {
	for(i=0;i<arr.length;i++){
		if(arr[i]%2 == 0){
			sum += arr[i];
		}
	}

	console.log(sum);
}


console.time("Problem 2");
makeArr(4000000)
console.log(arr);
findEven(arr);
console.timeEnd("Problem 2");