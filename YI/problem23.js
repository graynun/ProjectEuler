var factors = require('../SY/prime/factors').factors,
		limit = 28400,
		arrD = [],
		arrP = [],
		arrA = [],
		result = [];

var divideNum = function(num){
	var f = factors[num];
	var sum = 1;

	for ( var key in f) {
	sum = sum * (Math.pow(parseInt(key), f[key]+1)-1) / (parseInt(key)-1) ;
	}
	
	return sum - num;
}

var decidePerfect = function(num) {
	var sum = divideNum(num);

	if(num > sum){
		arrD.push(num);
	}else if(num == sum){
		arrP.push(num);
	}else{
		arrA.push(num);
	}

}

var decideResult = function(num) {
	
	for(var i =1;i<num;i++){
		for(var j =0;j<arrA.length;j++){
			
			if(arrA[j] >= i){
				break;
			}

			var a = i - arrA[j];

			if(arrA.indexOf(a) == -1){
				continue;
			}else{
				// console.log("succeed"+ a+" , "+arrA[j]+" , "+i);
				result.push(i);
				break;
			}
		}

	}

}


var findResult = function(num){
	var sum = 0;

	for(var i=1;i<num;i++){
		if(result.indexOf(i) == -1){
			sum += i;
		}
	}

	return sum;
}






for(var i =1; i<28123;i++){
	decidePerfect(i);
}

decideResult(28123);

console.log(result.length);

console.log(findResult(28123));


