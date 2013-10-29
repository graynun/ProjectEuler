var string = '3+1+2*4-3/5';
var string1 = '13+(5+2)*6';
var string2 = '3+((1+2)+(7+8)*3)*2';

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
	var stackT = [];
	var stackR = [];
	var priority = [['+', '-'], ['*', '/']];
	priority.length;
	arr.length;
	/* 스택으로 옮기는 법을 잘 모르겠어용 */
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

console.log(mkArr(string));

var stack1 = [3,1,'+',2,4,'*','+',3,5,'/','-'];
stack1.reverse();

console.log(calStack(stack1));