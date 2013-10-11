var result = [1];


var multiply2 = function() {

	var up = 0;

	for(var i=0;i<result.length;i++){
			
			var cal = result[i]*2;
			cal = cal + up;

		if(cal>9){
			up = Math.floor(cal/10);
			cal = cal - up*10;
		}else{
			up = 0;
		}
		
		result[i] = cal;

	}

	if(up != 0){
		result.push(up);	
	}
}

var times = function(n){
	for(var i=0;i<n;i++){
		multiply2();
	}
}

var sum = function(arr) {
	var sum = 0;

	for(var i=0;i<arr.length;i++){
		sum += arr[i];
	}

	return sum;
}


console.time("oops");
times(1000);
console.log(result);
console.log(sum(result));
console.timeEnd("oops");



