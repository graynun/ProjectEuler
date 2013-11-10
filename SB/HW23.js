var HW21 = require('./HW21');

console.time('a');
var abundantNs = [];
var naturals = [];
for(var i = 1; i <= 28123; i++){
	if(HW21.getSumOfDivisors(i) > i){
		abundantNs.push(i);
	}
	naturals.push(i);
}
console.log(abundantNs.length);
console.log(naturals.length);

if(false){
var sum = 0;
for(var i = 1; i <= 28123; i++){
	var sz = abundantNs.length;
	var flag = true;
	for(var j = 0; abundantNs[j] < i && j < sz; j++){
		var tempN = i - abundantNs[j];
		if(abundantNs.indexOf(tempN) != -1){ //여기도 이것 때문에 오래걸림-ㅁ-... 찌밤!
			flag = false;
			break;
		}
	}
	if(flag){
		sum += i;
	}
}
console.log(sum);
console.timeEnd('a');
//굉장히 오래걸림 : 56710ms	
}

if(false){
var sz = abundantNs.length;
for(var i = 0; i < sz; i++){
	for(var j = 0; j < sz; j++){
		var temp = abundantNs[i] + abundantNs[j];
		if(temp > 28123){
			break;
		}/* 여기가 미친듯이 오래걸림. 이거 빼면 103ms.....으아아아아
		var index = naturals.indexOf(temp);
		if(index != -1){
			naturals.splice(index, 1);
		}*/
	}
}

var sum = 0;
naturals.map(function(value){ sum += value; });
console.log(sum);
console.timeEnd('a');
//더 오래걸림 : 170534ms	
}

var sz = abundantNs.length;
for(var i = 0; i < sz; i++){
	for(var j = 0; j < sz; j++){
		var temp = abundantNs[i] + abundantNs[j];
		if(temp > 28123){
			break;
		}
		naturals[temp-1] = 0;
	}
}

var sum = 0;
naturals.map(function(value){ sum += value; });
console.log(sum);
console.timeEnd('a');
//우왕 : 126ms