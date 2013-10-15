var sumBigIntArr = function(A, B){
	var sz = Math.max(A.length, B.length);
	var arrTemp = [0];
	var C = [];
	var recentVal = 0;
	for(var i = 0; i < sz; i++){
		if(A[i] == null)	tempA = 0;
		else				tempA = parseInt(A[i]);
		if(B[i] == null)	tempB = 0;
		else				tempB = parseInt(B[i]);

		recentVal = tempA + tempB + arrTemp[i];
		C[i] = recentVal % 10;
		arrTemp[i+1] = (recentVal - C[i])/10;
	}
	if(arrTemp[sz] != null && arrTemp[sz] != 0)	C.push(arrTemp[sz]);
	return C;
}

var mulBigIntArr = function(A, B){
	var szA = A.length;
	var szB = B.length;
	var C = [0];

	var temp = 0;
	var arrPow = [];

	for(var i = 0; i < szB; i++){
		var arrSum = [0];
		if(i != 0){
			arrPow.push(0);
		}
 		for(var j = 0; j < szA; j++){
 			if(j != 0){
 				arrPow.push(0);
 			}
 			temp = parseInt(A[j]) * parseInt(B[i]);
 			tempArr = arrPow.slice(0);
 			tempArr.push(temp % 10, (temp - temp % 10)/10);
 			arrSum = sumBigIntArr(arrSum, tempArr);		
		}
		arrPow.splice(i);
		C = sumBigIntArr(C, arrSum);
	}
	return C;
}

var MKarrN = function(intN){
	var arrN = intN.toString().split('').reverse();
	//arrN.map(function a(item){ return parseInt(item)}); //?
	return arrN;
}

var factorial = function(N){
	var factorialN = [1];
	for(var i = 2; i <= N; i++){
		var arrN = MKarrN(i);
		factorialN = mulBigIntArr(factorialN, arrN);
	}
	return factorialN;
}







//console.log(mulBigIntArr([8,8,7],[8,0,1,7]).reverse());
var x = factorial(100);
var sz = x.length;
var sum = 0;
for(var i = 0; i < sz; i++){
	sum += x[i];
}
console.log(sum);