var amiArr = [];

var findDivisor = function(num){
	var sqrt = Math.floor(Math.sqrt(num));
	var divisorArr = [];
//	for(var i = num-1; i>sqrt; i--){
	for(var i = 1; i<=sqrt; i++){
		if(num % i == 0){
			divisorArr.push(i);
			divisorArr.push(num/i);
		}
	}

	// divisorArr = divisorArr.sort(function(a,b){return a-b});

	return divisorArr;
}


var sumDivisor = function(num){
	var arr = findDivisor(num);
	var sum = 1;
	for(var i =0; i<arr.length; i++){
		sum += arr[i];
	}

	return sum;
}


var findAmicable = function(num){
	for(var i = 2; i<num; i++){
		var sum = sumDivisor(i);
		var comSum = sumDivisor(sum);
	
		if(i == comSum && i != sum){

			var arr1 = [i, sum];
			// arr1 = arr1.sort(function(a,b){return a-b});
			amiArr.push(arr1);	
		}
	}

	return amiArr;
}



var calSum = function(arr){
	var sum = 0;

	for(var i =0;i<arr.length;i++){
		sum += arr[i][0];
		sum += arr[i][1];
	}

	sum = sum / 2 ;

	console.log(sum);
}

console.time("oops");
calSum(findAmicable(10000));
console.timeEnd("oops");