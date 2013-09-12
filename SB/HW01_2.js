var sumMP = function(maxNum, N){
	var sum = 0;
	var max_i = (maxNum - maxNum % N)/N;
	if(maxNum % N == 0)	max_i--;
	for(i = 0; i <= max_i; i++){
		sum += i * N;
	}
	return [sum, (i-1)];
}

console.log(sumMP(1000,3));
console.log(sumMP(1000,5));
console.log(sumMP(1000,15));
console.log(sumMP(31,3));
console.log(sumMP(51,5));
console.log(sumMP(151,15));
console.log(sumMP(1000, 3)[0]+sumMP(1000,5)[0]-sumMP(1000,15)[0]);
console.log('N = '+(sumMP(1000, 3)[1]+sumMP(1000,5)[1]+sumMP(1000,15)[1]));