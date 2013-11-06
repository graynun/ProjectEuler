var Person = function(name, bloodType) {
	this.name;
	this.bloodType;
	this.children = [];

	this.init(name, bloodType);
}

Person.prototype.init = function(name, bloodType) {
	this.name = name;
	this.bloodType = bloodType;
	return this;
}

Person.prototype.addChild = function(child) {
	this.children.push(child);
	return this;
}

Person.prototype.haveChild = function() {
	if ( this.children.length == 0 ) {
		return false;
	} else {
		return true;
	}
}

Person.prototype.schPerson = function(name) {
	if( this.name == name ) {
		return true;
	} else {
		if ( this.haveChild() ) {
			var bool = false;
			this.children.map( function(child){ bool = bool || child.schPerson(name) })
			return bool;
		} else {
			return false;
		}
	}
}

Person.prototype.countBloodType = function(bloodType, count) {
	if (count == null) {
		count = 0;
	}

	if ( this.bloodType == bloodType ) {
		count++;
	}

	if ( this.haveChild() ) {
		this.children.map( function(child){ count = child.countBloodType(bloodType, count); })
	}
	return count;
}

var x = new Person('jsb', 'OO');
var P1 = new Person('a', 'AO');
var P2 = new Person('b', 'AO');
var P3 = new Person('c', 'AO');
x.addChild(P1);
P2.addChild(P3);
x.addChild(P2);
console.log(x);
console.log(x.schPerson('jsb'));
console.log(x.schPerson('c'));
console.log(x.schPerson('p'));
console.log(x.countBloodType('AO'));