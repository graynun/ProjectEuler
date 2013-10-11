console.time("oops");
var hailstoneLog = [];

var findHSN = function(N){
	var HSN = 0;
	var oriN = N;
	if(N != 1){
		if(hailstoneLog[N] != null){
			HSN += hailstoneLog[N];
		}else{
			if(N % 2 == 0){
				N /= 2;
			}else{
				N = 3 * N + 1;
			}
			HSN = findHSN(N) + 1;	
		}
	}
	hailstoneLog[oriN] = HSN;
	return HSN;
}


console.log(findHSN(13));
console.log(hailstoneLog);
console.log(findHSN(26));

var count = 0;
var temp = 0;
var bigHSN = 0;
for(var i = 1; i < 1000000; i++){
	temp = findHSN(i);
	if(count < temp){
		count = temp;
		bigHSN = i;
	}
}

console.log(bigHSN);
console.timeEnd("oops");