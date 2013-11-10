var Triangluar = function() {
	var fs = fs = require('fs'),
		pTable = require('./pTable').primeTable;

	this.triArr = [];

	this._initialize();
};

var _ = Triangluar.prototype;

_._initialize = function() {
	this._getTriangularNum();
	console.log(this.triArr);
};

_._getTriangularNum = function() {
	var sum = 0;
	for ( var i = 1; i < 1000; i++) {
		sum += i;
		this.triArr.push(sum);
	}
};



var t = new Triangluar();