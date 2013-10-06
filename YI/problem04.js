var arr = [];
var arrPa = [];



var makeMultiply = function() {
  for(var i=100;i<1000;i++){
    for(var j=100;j<1000;j++){
      arr.push(i*j);
    }
  }

};


var findIfPalin = function(array) {
  this.arr = array;
  for(i=0;i<arr.length;i++){
    var str = arr[i].toString();

    if(str.length == 5){
      var front = str.slice(0,2);
      var end = reverse(str.slice(3));
      if(front == end){
        arrPa.push(arr[i]);
      }
    }else if(str.length==6){
      var front = str.slice(0,3);
      var end = reverse(str.slice(3));
      if(front == end){
        arrPa.push(arr[i]);
      }
    }
  }
};


var reverse = function(str){
    return str.split("").reverse().join("");
};


var sortArr = function(arr){
  this.arr = arr;
  arr.sort(function(a,b){return a-b});

};


console.time("oops");
makeMultiply();
//console.log(arr);
console.timeEnd("oops");
console.time("oops2")
findIfPalin(arr);
//console.log(arrPa);
console.timeEnd("oops2");
console.time("oops3")
sortArr(arrPa);
console.log(arrPa[arrPa.length-1]);
//console.log(arrPa)
console.timeEnd("oops3");