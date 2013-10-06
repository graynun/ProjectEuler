var Hailstone = function() {
	this.max = 0;
	this.limit = 1000000;
	this.cnt = null;

	this._initialize();
};

var _ = Hailstone.prototype;

_._initialize = function() {
	this._calc();
};

_._calc = function() {
	for (var i = 1; i < this.limit; i++) {
		this.cnt = 0;
		this._judge(i, i);
	}
};

_._judge = function(idx, n) {
	this.cnt++;
	if ( n == 1 ){
		if ( this.cnt > this.max ){
			this.max = this.cnt;
			console.log(idx, this.max);
		}
	} else {
		if ( n % 2 == 0 ) {
			this._judge(idx, (n / 2));
		} else {
			this._judge(idx, ((3 * n) + 1));
		}
	}
};

var hailstone = new Hailstone();