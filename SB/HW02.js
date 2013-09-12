var PB = function(N){
	return Math.round(Math.pow((Math.sqrt(5)+1)/2,N+1)/Math.sqrt(5) - Math.pow((Math.sqrt(5)-1)/2,N+1)/Math.sqrt(5));
}

var PB_sum = function(N){
	var sum = 0;
	for(var i = 1; i <= N; i++){
		sum += PB(i);
	}
	return sum;
}

var PB_sum_3n_2 = function(N){
	var max_i = ((N+1) - ((N+1) % 3))/3;
	var sum = 0;
	for(var i = 0; i < max_i; i++){
		sum += PB(3*i+2);
	}
	return sum;
}

var aaa = function(N){
	var max_i = ((N+1) - ((N+1) % 3))/3;
	var r1 = Math.pow((Math.sqrt(5)+1)/2,3);
	var r2 = Math.pow((Math.sqrt(5)-1)/2,3);
	var a1 = Math.pow((Math.sqrt(5)+1)/2,3)/Math.sqrt(5);
	var a2 = Math.pow((Math.sqrt(5)-1)/2,3)/Math.sqrt(5);
	return Math.round(a1 * (1 - Math.pow(r1, max_i)) / (1 - r1) - a2 * (1 - Math.pow(r2, max_i)) / (1 - r2));
}

for(var i = 2; i < 20; i++){
	console.log('방법1 : '+PB_sum_3n_2(i));
	console.log('방법2 : '+aaa(i));
}

