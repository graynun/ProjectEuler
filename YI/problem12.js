

var findF = function(num){
	var arrF =[];
		for(i=1;i<=Math.ceil(num/2);i++){
		if(num%i==0){
			arrF.push(i);
		}
	}

	arrF.splice(0,1);

	return arrF.length;
}




var nthTriangle = function(num) {
	return num*(num+1)/2;
}


var find500 = function(num) {
	for(var i=1;i<num;i++){
		var numOfF = findF(i)+findF(i+1)-1;
		if(numOfF > 500){
			console.log(nthTriangle(i));
			break;
		}

	}
}




console.time("oops");
find500(1000000);
console.timeEnd("oops");
