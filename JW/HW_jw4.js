var SymmetryNum = function() {
	this.initialize();	
};

var _ = SymmetryNum.prototype;

_.initialize = function() {
	this.main();
};

_.main = function() {
	var result = [];

	for (var i = 999; i > 0; i--){
		for (var j = 999; j > 0; j--){
			
			var arr = this.makeArr(i*j);

			if( this.mirror(arr) ) {
				result.push(parseInt(i*j));
			}
		}
	}

	var bbb = result.sort(function(a,b){
		if(a > b) {
			return 1;
		} else if(a == b) {
			return 0;
		} else {
			return -1;
		}
	});

	console.log(bbb[bbb.length-1]);
};


_.makeArr = function(num) {
	var str = String(num);
	var modiArr = [];

	for( var j = 0; j < str.length; j++ ) {
		modiArr.push(str[j]);
	}

	return modiArr;
};

_.mirror = function(numArray) {
	if (numArray.length < 2) {
		return false;
	}

	if( numArray.length % 2 == 0) {
		var a = numArray,
			b = a.splice( numArray.length / 2 ).reverse();

		if( this.comparison(a, b) ) {
			return true;
		} else {
			return false;
		}
		
	} else {
		var a = numArray,
			b = a.splice( Math.round(numArray.length / 2) - 1 ).reverse();
			c = b.pop();

		if( this.comparison(a, b) ) {
			return true;
		} else {
			return false;
		}
	}
};

_.comparison = function(a, b) {
	for(var k = 0; k < a.length; k++) {
		if( a[k] !== b[k] ){
			return false;
		}
	}
	return true;
};

var symmetryNum = new SymmetryNum();