var arr = [];
var count = 0;
var arrN = [];

var find = function(end){
	var halfEnd = Math.floor(Math.sqrt(end));
	for(i=2;i<=halfEnd;i++){
		count = 0;

		if(i%2==0 && i!=2){
			count += 1;
		}
		
		for(j=2;j*j<=i;j++){
			
			if(i%j==0){
				count += 1;
			}

		}
	
		if(count == 0){
			arr.push(i);
		}
	}

}

var findPF = function(num, arr){
	for(i=0;i<arr.length;i++){
		if(num%arr[i]==0){
			arrN.push(arr[i]);
		}

	}
}


console.time("oops");
find(600851475143);
console.log(arr);
findPF(600851475143, arr);
console.log(arrN);
console.timeEnd("oops");