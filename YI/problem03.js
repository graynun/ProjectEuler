var arrF = [];
var arrNPF = [];
var arrPF = [];


var onlyUnique = function(value, index, self){
	return self.indexOf(value) === index;
}

var findF = function(num){
	for(i=1;i<=num;i++){
		if(num%i==0){
			arrF.push(i);
		}
	}

	arrF.splice(0,1);
}

var findNPF = function(array){
	for(i=0;i<array.length;i++){
		for(j=0;j<i;j++){
			if(array[i]%array[j] == 0){
				arrNPF.push(array[i]);
			}
		}
	}


	arrNPFU = arrNPF.filter(onlyUnique);

}

var findPF = function(){
	for(i=0;i<arrNPFU.length;i++){
		var index = arrF.indexOf(arrNPFU[i]);
		arrF.splice(index, 1);
	}
}



findF(600851475143);
console.log(arrF);
/*findNPF(arrF);
console.log(arrNPFU);
findPF();
console.log(arrF);
*/