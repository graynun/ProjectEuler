var a, b, c;




var findNum = function() {
	for(var i=1;i<400;i++){
		for(var j=1;j<300;j++){
			a = i;
			b = j;
			c = Math.sqrt(a*a + b*b);
			var sum = a+b+c;

			if(sum == 1000){
				console.log(a + ", "+ b+ ", "+c);
				console.log(a*b*c);
				break;
			}
		}
	}
}

console.time("oops");
findNum();
console.timeEnd("oops");