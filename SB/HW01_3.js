var sumMP = function(maxNum, N){
	var sum = 0;
	var remain_j = ((maxNum - maxNum % N)/N) % 10;
	var max_j = ((maxNum - maxNum % N)/N - remain_j)/10;
	var temp = 0;
	for(i = 1; i <= 10; i++){
		temp += N * i;
	}
	for(j = 1; j <= max_j; j++){
		sum += temp + (N * 10 * (j-1) * 10);
	}
	for(k = 1; k <= remain_j; k++){
		sum += k * N + N * 10 * max_j; 
	}
	if(remain_j == 0)	sum -= maxNum;
	return [sum, (i+j+k-3)];
}
//10개마다 끊어서 했는데 몇개마다 끊어서 하는게 최소인지 알 수 없음...
/*
var sumMP5 = function(maxNum){
	var sum = 0;
	var remain_j = ((maxNum - maxNum % 5)/5) % 10;
	var max_j = ((maxNum - maxNum % 5)/5 - remain_j)/10;
	var temp = 0;
	for(i = 1; i <= 10; i++){
		temp += 5 * i;
	}
	for(j = 1; j <= max_j; j++){
		sum += temp + (50 * (j-1) * 10);
	}
	if(remain_j == 0)	sum -= maxNum;
	for(k = 1; k < remain_j; k++){
		sum += k * 5 + 50 * max_j; 
	}
	return [max_j, temp, remain_j, sum, (i+j+k-3)];
}

var sumMP15 = function(maxNum){
	var sum = 0;
	var remain_j = ((maxNum - maxNum % 15)/15) % 10;
	var max_j = ((maxNum - maxNum % 15)/15 - remain_j)/10;
	//max_j = Math.floor(max_j);	
	var temp = 0;
	for(i = 1; i <= 10; i++){
		temp += 15 * i;
	}
	for(j = 1; j <= max_j; j++){
		sum += temp + (150 * (j-1) * 10);
	}
	for(k = 1; k <= remain_j; k++){
		sum += k * 15 + 150 * max_j; 
	}
	return [max_j, temp, remain_j, sum, (i+j+k-3)];
}
*/

console.log(sumMP(1000, 3)[0]+sumMP(1000,5)[0]-sumMP(1000,15)[0]);
console.log('N = '+(sumMP(1000, 3)[1]+sumMP(1000,5)[1]+sumMP(1000,15)[1]));