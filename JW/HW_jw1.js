var sum =null,
	limit = 10;

for(var i = 0; i < limit; i++){
	if(i%3 == 0 || i%5 == 0){
		sum += i;
	}
}

console.log(sum);