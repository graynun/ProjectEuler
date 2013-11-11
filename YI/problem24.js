var original = [0,1,2,3,4,5,6,7,8,9];
var result = [];
var endNum = 1000000;

var findNear = function(){

	for(var i =0;i<original.length;i++){
		if(original.length == 1){
			result.push(original[0]);
			endNum = 0;
			break;
		}

		var cursor = original[i];
 		var size = factorial(original.length - 1);

		if(endNum - size > 0){
			endNum = endNum - size;
			continue;
		}else{
			result.push(original[i]);
			original.splice(i,1);
			// console.log(endNum);
			break;
		}
	}
}


var factorial = function(n) {
	if(n <= 1) return 1;
	return n*factorial(n-1);
}

var repeatToFind = function() {
	do{
		findNear(endNum);
	}while(endNum > 0);
}


// console.log(factorial(9));

repeatToFind();
console.log(result);