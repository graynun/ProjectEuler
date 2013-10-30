var string = '3+1+2*4-3/5';
var string1 = '13+(5+2)*6';
var string2 = '3+((1+2)+(7+8)*3)*2';
var string3 = '2+3+1-5';

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

var mkStack = function(arr) {
	var OPbox = null;
	var stackN = [];
	var stackR = [];
	var priority = [['+', '-'], ['*', '/']];
	for (var i = 0; i < priority.length; i++) {
		while (arr.length != 0) {
			var temp = arr.pop();
			if (priority[i].indexOf(temp) != -1) {
				OPbox = temp;
			} else {
				stackN.push(temp);
				if ( OPbox != null ) {
					while (stackN.length != 0) {
						stackR.push(stackN.pop());
					}
					stackR.push(OPbox);
					OPbox = null;
				}
			}
		}
	}
	return stackR;
}

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
	return calStack(mkStack(mkArr(string)));
}

console.log(mkArr(string), 'mkArr동작 확인');

var stack1 = [3,1,'+',2,4,'*','+',3,5,'/','-'];
stack1.reverse();
console.log(calStack(stack1), 'calStack동작 확인');

console.log(mkArr(string3));
console.log(mkStackOnlyP(mkArr(string3)));
console.log(calStack(mkStackOnlyP(mkArr(string3))), '덧셈 뺄셈 연산자에 대해서만 구현');

console.log(mkArr(string));
console.log(mkStack(mkArr(string)), '여기서 막힘');