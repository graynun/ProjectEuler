var a = "1+4*(3-2)*9";
var braceLoc = [];


var initialize = function(a) {
	var array = stringToArr(a);
	var braceLoc = findBrace(array);

	if(braceLoc.length != 0){
		for(var i = 0;i<braceLoc.length;i++){
			var braceStr = array.splice(braceLoc[i][0]+1, braceLoc[i][2]);
			braceStr.splice(-1,1);
			var RPNArr = transToRPN(braceStr);
			console.log(braceStr);
			console.log(array);
			console.log(RPNArr);
			// var result = calculate(RPNArr);
			// array[braceLoc[i][0]] = result;
			break;
		}
	}


};



var stringToArr = function(a){
	var transArr = a.split("");
	return transArr;
}

var findBrace = function(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i] == "("){
			braceLoc.push([i, -Infinity]);
		}else if(arr[i] == ")"){
			for(var j=braceLoc.length-1;j>=0;j--){
				if(braceLoc[j][1] == -Infinity){
					braceLoc[j][1] = i;
					braceLoc[j].push(i-braceLoc[j][0]);
					break;
				}
			}
		}
	}	

	braceLoc.sort(function(a,b){return a[a.length-1] - b[b.length-1];});

	return braceLoc;
}

var transToRPN = function(arr){
	var RPNArr = [];
	var PMArr = 0;

	var cursor = 0;
	var cursorEnd = arr.length;

	do {
		if(arr[cursor] == "-"){
			RPNArr.push(-parseInt(arr[cursor+1]));
			PMArr += 1;
			cursor +=1;
			if(cursor >= cursorEnd-1){
				for(var i=0; i<PMArr;i++)
				RPNArr.push("+");
			}
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


console.log(calculate(transToRPN(stringToArr(a))));
console.log(braceLoc);