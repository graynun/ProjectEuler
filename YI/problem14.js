var maxVal = [1,1];
var count = 0;


var collatzSeq = function(num){
	this.num = num;
	count = 0;

	while(num != 1){
		if(num%2 == 0){
			num = num/2;
		}else{
			num = num*3 + 1;
		}
	count ++;
	}

}

var decideMax = function(num, count){
	if(count > maxVal[1]){
		maxVal = [num, count];
	}
}

var looping = function(end) {
	for(var i=1;i<end;i++){
		collatzSeq(i);
		decideMax(i,count);
	}
}

console.time("oops");
looping(1000000);
console.log(maxVal);
console.timeEnd("oops");