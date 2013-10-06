var schPythaN = function(N){
	for(var i = 1; i < N; i++){
		for(var j = 1; j < N; j++){
			var k = 1000 - i - j;
			if(i*i + j*j == k*k){
				return [i, j, k];
			}
		}
	}
}

var schPythaN2 = function(N){
	for(var i = 1; i < N; i++){
		if((i*i) % (1000 - i) == 0){
			k = ((1000 - i) + (i*i)/(1000 - i))/2;
			j = ((1000 - i) - (i*i)/(1000 - i))/2;
			return [i, j, k];
		}
	}
}
console.log(schPythaN(1000));
console.log(schPythaN2(1000));