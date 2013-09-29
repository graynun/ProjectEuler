var arr = [];
var primeArr = [2,3,5,7];


var findPN = function(num){
	this.num = num;

	for(var i=2;j<num+1;i++){
		for(var j=0;j<arr.length;j++){
			console.log("1");
			if(i%arr[j] != 0){
				primeArr.push(i);
				console.log(primeArr);
			}
		}
	}

}




console.time("oops");
findPN(20);
console.log(primeArr);
console.timeEnd("oops");