var sumofMPof35 = function(maxNum){
	var sum = 0;
	for(i = 1; i < maxNum; i++){
		if(i % 3 == 0 || i % 5 == 0){
			sum += i;
		}
	}
	return sum;
}

console.log(sumofMPof35(1000));
console.log('N = 1000');
