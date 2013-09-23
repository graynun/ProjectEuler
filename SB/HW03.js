var arr = [2];
var arr2 = [];

var MkArr = function(N){
	for(var i = 3 ; i <= N ; i++){
		var sz = arr.length;
		for(var j = 0; j < sz; j++){
			if(i % arr[j] == 0)	break;
			if(j == sz-1)	arr.push(i);
		}
	}
}

var SearchArr = function(N){
	var temp1 = [1];
	var temp2 = [N];
	var max = Math.floor(Math.sqrt(N));
	var i = 0;
	while(arr[i] < max){
		if(i >= arr.length)	break;
		if(N % arr[i] == 0){
			temp1.push(arr[i]);
			temp2.push(N/arr[i]);
		}
		i++;
	}
	return [temp1, temp2];
}

//MkArr(100);
//console.log(arr);
MkArr(Math.floor(Math.sqrt(600851475143)));
console.log('개수 : '+arr.length);

var x = SearchArr(600851475143);
var y = SearchArr(x[1][1]);

console.log(x);
console.log(y);

console.log(Math.max(x[0][x[0].length-1], y[0][y[0].length-1]));