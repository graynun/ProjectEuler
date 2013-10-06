var a = function(N){
	return N*N*(N+1)*(N+1)/4;
}

var b = function(N){
	return N*(N+1)*(2*N+1)/6;
}

console.log(a(100) - b(100));