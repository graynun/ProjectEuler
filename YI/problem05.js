var arr = [];


var primeFactorize = function(number) {
	this.num = number;
	arr = [];
	for(var i=2; i<this.num+1; i++){
		if(this.num%i == 0){
			var resultArr = [];
			var count = 0;

			resultArr.push(i);
						
				do{
					this.num = this.num / i ;
					count += 1;
				}while(this.num%i==0)
			
			resultArr.push(count);
			arr.push(resultArr);
		}
	}
}


for(var i=2;i<21;i++){
	primeFactorize(i);
	console.log(arr);	
};
