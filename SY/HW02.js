'use strict';

Array.prototype.lastOf = function() {
	if(this.length === 0) return null;
	return this[this.length - 1];
};

var str = "(3+(5/4))*(6-7)";

var priority = function(char) {
	switch(char) {
		case '(':
			return 2;
		case '*':
		case '/':
			return 8;
		case '+':
		case '-':
			return 6;
		case ')':
			return 2;
		default:
			return 12;
	}
};

var reverseP = function(str) {
	var stack1 = [],
		stack2 = [],
		cursor = -1,
		flag = false,
		cur;

	for(;;) {
		if(flag) break;
		if(cursor >= str.length - 1) break;

		cursor++;
		cur = str[cursor];

		if(['(', ')', '*', '/', '+', '-'].indexOf(cur) === -1) {
			stack2.push(cur);
		} else if(cur === '(') {
			stack1.push(cur);
		} else if(cur === ')') {
			for(;;) {
				if(stack1.length === 0) break;

				var pp = stack1.pop();
				if(pp === '(') break;
				stack2.push(pp);
			}
		} else {
			for(;;) {
				if(stack1.length === 0) break;

				if(priority(stack1.lastOf()) >= priority(cur)) {
					var pp = stack1.pop();
					stack2.push(pp);
				} else {
					break;
				}
			}
			stack1.push(cur);
		}
	}

	for(;;) {
		stack2.push(stack1.pop());
		if(stack1.length === 0) break;
	}

	return stack2;
};

console.log(reverseP(str));

var evaluateRP = function(rp) {
	var numStack = [];

	for(var i = 0; numStack.length !== 1 || i < rp.length; i++) {
		if(['+','-','*','/'].indexOf(rp[i]) !== -1) {
			var op1 = parseFloat(numStack.pop()),
				op2 = parseFloat(numStack.pop());

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
			numStack.push(parseFloat(rp[i]));
		}
	}
	return numStack[0];
};


console.log(evaluateRP(reverseP(str)));
