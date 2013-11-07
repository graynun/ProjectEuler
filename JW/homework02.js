// var str = '3+((2+4)*(2+1))+7',
// 	stack = [],
// 	numStack = [],
// 	cnt = 0;

// var findPriority = function(s) {
// 	if(s == '(') cnt++;
// 	if(s == ')') cnt--;
	
// 	if(cnt > 0) {
// 		var newReturn = cnt*10;

// 		switch (s) {
// 			case '(' :
// 				return newReturn*10;
// 			case '*' :
// 			case '/' :
// 				return newReturn*8;
// 			case '+' :
// 			case '-' :
// 				return newReturn*4;
// 			case ')' :
// 				return newReturn*2;
// 			case null :
// 				return newReturn*100;
// 			default : 
// 				return newReturn*6;
// 		}

// 	} else {
// 		switch (s) {
// 			case '(' :
// 				return 10;
// 			case '*' :
// 			case '/' :
// 				return 8;
// 			case '+' :
// 			case '-' :
// 				return 4;
// 			case ')' :
// 				return 2;
// 			case null :
// 				return 100;
// 			default : 
// 			return 6;
// 		}
// 	}
// }

// var makeRpn = function(str) {
// 	var strSplit = str.split(''),
// 		curr = 0;

// 	for (var i = 0; i < strSplit.length; i++) {
// 		if( curr > strSplit.length ) break;
// 		if( findPriority(strSplit[curr]) > findPriority(numStack[i]) ) {
// 			stack.push(numStack[numStack.length-1]);
// 			numStack.pop();
// 			numStack.push(strSplit[curr]);
// 			numStack.push(stack[stack.length-1]);
// 			curr++;
// 		} else {
// 			numStack.push(strSplit[curr]);
// 			curr++;
// 		}
// 	}
	
// };

// makeRpn(str);

// console.log(numStack);