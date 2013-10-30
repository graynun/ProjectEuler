var a = "3*(8+4*2)-6";


var evaluate = function(a){
	var arr = stringToArr(a);
	console.log(a);
	var b = transToRPN(arr);
	console.log(b);
	var c = calculate(b);
	return c;
}


var stringToArr = function(a){
	var transArr = a.split("");
	return transArr;
}

var searchBraket = function(arr){
	var cursor = 0;
	var cursorEnd = arr.length;

	do {
		if(arr[cursor] == "("){
			for(var i = cursor;i<arr.length;i++){
				if(arr[i] == ")"){
					var startInd = cursor+1;
					var endInd = i;
					break;
				}
			}
			
		var newArr = arr.slice(startInd, endInd);
		arr.splice(startInd, endInd - startInd+1);
		arr[cursor] = calculate(transToRPN(newArr)).toString();
		}
		cursor++;		
	}while(cursor < cursorEnd);

	return arr;
}

var transToRPN = function(arr){
	var RPNArr = [];
	var PMArr = 0;

	var arr = searchBraket(arr);

	var cursor = 0;
	var cursorEnd = arr.length;

	do {
		if(arr[cursor] == "-"){
			RPNArr.push(-parseInt(arr[cursor+1]));
			PMArr += 1;
			cursor +=1;
		}else if(arr[cursor] == "+"){
			PMArr += 1;
		}else if((arr[cursor] == "*" || arr[cursor] == "/")){
			RPNArr.push(parseInt(arr[cursor+1]));
			RPNArr.push(arr[cursor]);
			cursor += 1;
			if(cursor >= cursorEnd-1){
				for(var i=0; i<PMArr;i++)
				RPNArr.push("+");
			}
		}else{
			RPNArr.push(parseInt(arr[cursor]));	
			if(cursor >= cursorEnd-1){
				for(var i=0; i<PMArr;i++)
				RPNArr.push("+");
			}
		}
			cursor++;
	}while(cursor < cursorEnd);

	return RPNArr;
}


var calculate = function(arr){
	var cursor = 0;
	var cursorEnd = arr.length;

	do {
		if(arr[cursor] == "*" && typeof arr[cursor-1] == "number" && typeof arr[cursor-2] == "number"){
			var res = arr[cursor-1] * arr[cursor-2];
			arr[cursor-2] = res;
			arr.splice(cursor-1,2);
			cursor -= 2;
		}else if(arr[cursor] == "/" && typeof arr[cursor-1] == "number" && typeof arr[cursor-2] == "number"){
			var res = arr[cursor-1] / arr[cursor-2];
			arr[cursor-2] = res;
			arr.splice(cursor-1,2);
			cursor -= 2;
		}else if(arr[cursor] == "+"){
			var res = arr[cursor-1] + arr[cursor-2];
			arr[cursor-2] = res;
			arr.splice(cursor-1,2);
			cursor -= 2;
		}
		cursor++;
	}while(arr.length > 1)

	return arr[0].toString();
}


console.log(evaluate(a));