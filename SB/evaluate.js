var string = '3+1+2*4/2';
var string1 = '13+(5+2)';
var string2 = '3+((1+2)+(7+8)*3)*2';
var string3 = '2+3+1-5';

/* string => 숫자와 연산자로 자른 arr 생성 */
var mkArr = function(string) {
	var arr =[];
	
	var len = string.length;
	var intString = '';
	for(var i = 0; i < len; i++){
		if ( !isNaN(string.charAt(i)) ) {
			intString += string.charAt(i);	
		} else {
			if (intString != '') {
				arr.push(parseInt(intString));
				intString = '';	
			}
			arr.push(string.charAt(i));
		}
	}
	if (intString != '') {
		arr.push(parseInt(intString));
		intString = '';			
	}
	return arr;
}
/* tree구조를 만들 node */
var node = function(element) {
	this.left = null;
	this.right = null;
	this.element = null;
	this.flag = false;

	this.init(element);
}

node.prototype.init = function(element) {
	this.element = element;
}
node.prototype.add = function(element) {
	if ( typeof element != 'object' ) {
		var that = new node(element);	
	} else {
		that = element;
	}

	switch (this.isUpper(that)) {
		case 'same' : console.log('same', that, this); console.log('***********');//경우에따라 ~_~
		if (this.left == null || this.right == null) {
			if (this.left == null) {
				this.left = that;
			} else if (this.right == null) {
				this.right = that;
			}
			return this;
		}

		case 'up' : console.log('up', that, this);  console.log('***********');//위에 node추가
		that.add(this);
		return that;

		case 'that(down' : console.log('that(down', that, this);  console.log('***********');
		this.flag = true;

		case 'down' : console.log('down', that, this); console.log('***********'); //아래 node추가
		if (this.left == null) {
			this.left = that;
		} else if (this.right == null) {
			this.right = that;
		} else {
			if (typeof that.element == 'number' || this.flag) {
				this.right.add(that);
			} else {
				that.add(this.right);
				this.right = that;	
			}
		}
		return this;

		case 'this(translate' : console.log('this(translate', that, this);  console.log('***********');//아래추가
		if (this.flag) {
			if (this.right.element == '(') {
				this.right.add(that);
			} else {
				this.left.add(that);
			}
		} else {
			this.element = that.element;
		}
		return this;

		case ')' : console.log(')', that, this);  console.log('***********');//하는일 없음
		return this;
	}
}
node.prototype.isUpper = function(that) {
	if ( typeof this.element == 'number' ) {
		return 'up';
	} else {
		if ( typeof that.element == 'number') {
			return 'down';
		}

		var priority = [['+', '-'], ['*', '/'], ['(']];
		var thisPriority = -1;
		var thatPriority = -1;
		for (var i = 0; i < priority.length; i++) {
			if ( priority[i].indexOf(this.element) != -1 )
				thisPriority = i;
			if ( priority[i].indexOf(that.element) != -1 )
				thatPriority = i;
		}
		
		if ( that.element == ')') {
			return ')';
		}

		if ( this.flag ) {
			return 'down';
		}

		if ( thisPriority > thatPriority ) {
			if ( this.element == '(') {
				return 'this(translate';
			} else {
				return 'up';	
			}
		} else if ( thisPriority == thatPriority ) {
			if ( that.element == '(' ) {
				return 'that(down';
			} else {
				return 'same';
			}
		} else {
			if ( that.element == '(' ) {
				return 'that(down';
			} else {
				return 'down';
			}
		}
	}
}
node.prototype.mkStack = function() {
	if ( this.left == null && this.right == null) {
		return [this.element];
	}
	var stack = null
	if ( this.left != null ) {
		stack = this.left.mkStack();
	}
	if ( this.right != null && this.left == null) {
		stack = this.right.mkStack();
	} else if ( this.right != null ) {
		stack = stack.concat(this.right.mkStack());
	}
	stack.push(this.element);
	return stack;
}
/* tree만들기 */
var mkTree = function(arr) {
	var topNode = new node(arr[0]);
	for (var i = 1; i < arr.length; i++) {
		topNode = topNode.add(arr[i]);
	}
	return topNode;
}
/*
var mkStackOnlyP = function(arr) {
	var OPbox = null;
	var NumBox = null;
	var stackR = [];
	while (arr.length != 0) {
		var temp = arr.pop();
		if ( typeof temp != 'number' ) {
			stackR.push(temp);
			if ( NumBox != null) {
				stackR.push(NumBox);
				NumBox = null;
			}
		} else {
			NumBox = temp;
		}
	}
	if ( NumBox != null ) {
		stackR.push(NumBox);
	}
	return stackR;
}
*/
/* 역폴란드법으로 정리된 stack을 계산한다 */
var calStack = function(stack) {
	var tempST = [];
	var sz = stack.length;
	for (var i = 0; i < sz; i++) {
		var thisE = stack.pop();
		if( typeof thisE == 'number' ) {
			tempST.push(thisE);
		} else {
			var outer = tempST.pop();
			var inner = tempST.pop();
			if (thisE == '+') {
				tempST.push(inner+outer);
			} else if (thisE == '-') {
				tempST.push(inner-outer);
			} else if (thisE == '*') {
				tempST.push(inner*outer);
			} else if (thisE == '/') {
				tempST.push(inner/outer);
			} else {
				tempST.push(inner);
				tempST.push(outer);
			}
		}
	}
	return tempST;
}

var evaluate = function(string) {
	return calStack(mkTree(mkArr(string)).mkStack());
}
/*
console.log(mkArr(string), 'mkArr동작 확인');

var stack1 = [3,1,'+',2,4,'*','+',3,5,'/','-'];
stack1.reverse();
console.log(calStack(stack1), 'calStack동작 확인');

console.log(mkArr(string3));
console.log(mkStackOnlyP(mkArr(string3)));
console.log(calStack(mkStackOnlyP(mkArr(string3))), '덧셈 뺄셈 연산자에 대해서만 구현');
*/
var myTree = mkTree(mkArr(string1));
console.log(string1);
console.log(myTree);
console.log(myTree.mkStack());
console.log('===========================');
var myTree = mkTree(mkArr(string2));
console.log(string2);
console.log(myTree);
console.log(myTree.mkStack());