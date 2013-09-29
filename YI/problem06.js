var findSum = function(num){
	var sum = 0;

	for(var i=1;i<num+1;i++){
		sum += i;
	}
	return sum * sum;
}


var findSquare = function(num){
	var squ = 0;
	for(var i=1;i<num+1;i++){
		squ += i*i;
	}

	return squ;
}



var result = findSum(100) - findSquare(100);
console.log(result);