exports.getDivisors = getDivisors = function(N){
	var divisors = [];
	var max = Math.sqrt(N);
	for(var i = 1; i <= max; i++){
		if(N % i == 0){
			divisors.push(i);
			if( i != N / i ){
				divisors.push(N/i);	
			}
		}
	}
	divisors.sort(function(a,b){ return a-b});
	return divisors;
}

exports.getSumOfDivisors = getSumOfDivisors = function(N){
	var divisors = getDivisors(N);
	var sz = divisors.length;
	var sum = 0;
	for(var j = 0; j < sz-1; j++){
		sum += divisors[j];
	}
	return sum;
}

var sumOfDivisorsArr = [];
for(var i = 1; i <= 10000; i++){
	sumOfDivisorsArr[i] = getSumOfDivisors(i);	
}

var sumFriends = 0;
for(var i = 1; i <= 10000; i++){
	var j = sumOfDivisorsArr[i];
	if(sumOfDivisorsArr[j] == i && i != j){
		sumFriends += i;
		sumFriends += j;
	}
}
console.log(sumFriends/2);