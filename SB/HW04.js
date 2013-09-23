var isPalindrome = function(num){
	var arrN = [];
	var temp = 0;
	var sum = 0;
	for(var i = 0; i < 6; i++){
		temp = (num - sum) % Math.pow(10, i+1);
		arrN.push(temp / Math.pow(10, i));
		sum += temp;
	}
	var half_sz = arrN.length / 2;
	var arrN_1 = arrN.slice(0,half_sz);
	var arrN_2 = arrN.slice(half_sz,arrN.length);
	arrN_2.reverse();
	for(var i = 0; i < half_sz; i++){
		if(arrN_1[i] !== arrN_2[i])
			return 0;
	}
	return 1;
}

var MKnums = function(){
	var arr = [];
	for(var i = 1; i <= 9; i++){
		for(var j = 1; j <= i; j++){
			arr.push([i*j, i, j]);
		}
	}

	var sz = arr.length;
	var arr_st = [];
	for(var j = 0; j < sz; j++){
		for(var i = 9; i >= 0; i--){
			if(j == 0)	
				arr_st[9-i] = [];
			if(arr[j][0] % 10 == i){
				arr_st[9-i].push([arr[j][1], arr[j][2]]);
				if(j != 0)
					break;
			}
		}
	}

	return arr_st; //끝자리를 9,8,7...로 만드는 i, j조합
}

var A = 9;
var D = 9;
var arr_CF = MKnums()[0];
var B = 9;
var E = 9;
var sz_arr_CF = arr_CF.length;

var number = 0;
var flag = 0;
for(B = 9; B >= 0; B--){
	for(E = 9; E >= 0; E--){
		for(var i = 0; i < sz_arr_CF; i++){
			var C = arr_CF[i][0];
			var F = arr_CF[i][1];
			number = A*D*Math.pow(10,4) + (A*E + B*D)*Math.pow(10,3) + (A*F + B*E + C*D)*Math.pow(10,2) + (B*F + C*E)*Math.pow(10,1) + (C*F);
			if(isPalindrome(number) === 1){
				flag = 1;
				break;
			}
		}
		if(flag === 1)	break;
	}
	if(flag === 1)	break;
}

console.log(number);