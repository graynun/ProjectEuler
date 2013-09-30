var foo = function() {
	this.pythaArr = [];
	this.oddArr = [];

	this._initialize();
};

var _ = foo.prototype;

_._initialize = function() {
	this._makeOddArr();
	this._makePytagoras();
};

_._makeOddArr = function () {
	for (var i = 0; i < 1000; i++) {
		this.oddArr.push( (2*i) + 1 );
	}
};

_._makePytagoras = function() {
	var a = 0,
		b = 0,
		c = 0;

	for ( var i = 0; i < this.oddArr.length -1; i++) {
		for (var j = i + 1; j < this.oddArr.length; j++) {
			a = this.oddArr[j] * this.oddArr[i],
			b = (Math.pow(this.oddArr[j], 2) - Math.pow(this.oddArr[i], 2)) / 2,
			c = (Math.pow(this.oddArr[j], 2) + Math.pow(this.oddArr[i], 2)) / 2;

		if( (a + b + c) == 1000 ) {
			console.log(this.oddArr[i], this.oddArr[j]);
			console.log(a, b, c, a*b*c);
		}

		}
	}


	
};

var f = new foo();