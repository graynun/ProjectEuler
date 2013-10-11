var foo = function(n) {
	this.num = n;

	this._initialize();
};

var _ = foo.prototype;

_._initialize = function() {
	this._calc(this.num);
};

_._calc = function(n) {
	var fac = this._fac(n*2) / ( this._fac(n) * this._fac( (n*2) - n) );
	
	console.log(fac);
};

_._fac = function(n) {
	var product = 1;

	for (var i = n; i > 0; i--) {
		product *= i;
	}

	return product;
}

var f = new foo(20);