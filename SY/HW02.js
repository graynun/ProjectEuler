'use strict';

<<<<<<< HEAD
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
=======
Array.prototype.lastOf = function(paren) {
	if(this.length === 0) return [null, paren];
	return this[this.length - 1];
};

var str = "3+(5+4)*6-7";
// var str = "6*(5+3)";
// var str = "(5+3)*6";
// var str = "3*6-2";
// var str = "3+6*2";
// var str = "3+5";

var priority = function(char) {
	switch(char) {
		case '(':
			return 20;
		case '*':
		case '/':
			return 8;
		case '+':
		case '-':
			return 6;
		case ')':
			return 2;
		case null:
			return 999;
		default:
			return 12;
	}
};

var reverseP = function(str) {
	var stack1 = [],
		stack2 = [],
		cursor = 0,
		cur = str[cursor],
		paren = 0,
		flag = false;

	while(true) {
		if(flag) break;
		if(cursor >= str.length) break;
		console.log(paren, cur, stack1, stack2);

		while(priority(cur) <= priority(stack1.lastOf(paren)[0]) && paren == stack1.lastOf(paren)[1]) {
			console.log(paren, cur, stack1, stack2);
			if(stack1.length !== 0) {
				var pp = stack1.pop();
				stack2.push(pp);
			}
			else break;
		}

		if(cur === '(') paren++;
		stack1.push([cur, paren]);
		cursor++;
		cur = str[cursor];
		if(cur === ')') paren--;
	}
	//var str = "3+(5+4)*6-7";

	for(;;) {
		stack2.push(stack1.pop());
		if(stack1.length === 0) break;
	}

	return stack2.filter(function(val) {
		return (['(', ')'].indexOf(val[0]) === -1);
	}).map(function(val) {
		return val[0];
	});
};

console.log(reverseP(str));

var rp = ('354+6*+7-').split('');
console.log(rp);

var evaluateRP = function(rp) {
	var numStack = [];

	for(var i = 0; numStack.length !== 1 || i < rp.length; i++) {
		if(['+','-','*','/'].indexOf(rp[i]) !== -1) {
			var op1 = parseInt(numStack.pop()),
				op2 = parseInt(numStack.pop());

			switch(rp[i]) {
				case '+':
					numStack.push(op2 + op1);
					break;
				case '-':
					numStack.push(op2 - op1);
					break;
				case '*':
					numStack.push(op2 * op1);
					break;
				case '/':
					numStack.push(op2 / op1);
					break;
			}
		} else {
			numStack.push(parseInt(rp[i]));
		}
	}
	return numStack[0];
};


console.log(evaluateRP(rp));
>>>>>>> b9785bbd7827da562710fa5aed521e91756cd0e6
