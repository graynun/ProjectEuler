'use strict';

Array.prototype.lastOf = function() {
	return this[this.length - 1];
};

var str = "3+(5+3)*6-5";

var reverseP = function(str) {
	var stack1 = [],
		stack2 = [];

	for(var i = 0; i < str.length; i++) {
		var cur = str[i];

 		if(['+','-','*','/'].indexOf(cur) !== -1) {
 			;
 		} else {
			stack1.push(cur);
 		}

		stack1.lastOf()
	}
};
console.log(reverseP(str));

var rp = ('353+6*+5-').split('');
console.log(rp);

// var evaluateRP = function(rp) {
// 	var numStack = [];

// 	for(var i = 0; numStack.length !== 1 || i < rp.length; i++) {
// 		if(['+','-','*','/'].indexOf(rp[i]) !== -1) {
// 			var op1 = parseInt(numStack.pop()),
// 				op2 = parseInt(numStack.pop());

// 			switch(rp[i]) {
// 				case '+':
// 					numStack.push(op2 + op1);
// 					break;
// 				case '-':
// 					numStack.push(op2 - op1);
// 					break;
// 				case '*':
// 					numStack.push(op2 * op1);
// 					break;
// 				case '/':
// 					numStack.push(op2 / op1);
// 					break;
// 			}
// 		} else {
// 			numStack.push(parseInt(rp[i]));
// 		}
// 	}
// 	return numStack[0];
// };


// console.log(evaluateRP(rp));
