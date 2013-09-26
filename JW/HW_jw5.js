var LCM = function() {
	this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 , 19, 20];
	this.divider = [];
	this.two = 0;
	this.three = 0;
	this.five = 0;
	this.seven = 0;

	this.initialize();
};

var _ = LCM.prototype;

_.initialize = function() {
	this.main(this.arr);
};

_.main = function(arr) {
	this.two = this.divCount(2, arr);
	this.three = this.divCount(3, arr);
	this.five = this.divCount(5, arr);
	this.seven = this.divCount(7, arr);

	if( this.seven < 2){
		if( this.five < 2 ){
			if( this.three < 2 ){
				if( this.two < 2 ){
					console.log(this.divider);
					console.log(arr);
					console.log(this.arraySum(this.divider) * this.arraySum(arr));
				} else {
					this.main(this.arrayDivider(2, arr));
				}

			} else {
				this.main(this.arrayDivider(3, arr));
			}

		} else {
			this.main(this.arrayDivider(5, arr));
		}
	} else {
		this.main(this.arrayDivider(7, arr));
	} 
};

_.divCount = function(n, array) {
	var num = 0;

	for (var i = 0; i < array.length; i++){
		if( array[i] % n == 0) {
			num++;
		}
	}
	return num;
};

_.arrayDivider = function (n, array) {
	var modiarr = [];

	this.divider.push(n);
	for (var j = 0; j < array.length; j++){
		if ( array[j] % n == 0 ){
			modiarr.push(array[j] / n);		
		} else {
			modiarr.push(array[j]);
		}
	}
	return modiarr;
};

_.arraySum = function(array) {
	var sum = 1;

	for(var k = 0; k < array.length; k++){
		sum *= parseInt(array[k]);
	}
	return sum;
};

var lcm = new LCM();