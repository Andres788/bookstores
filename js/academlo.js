/*****************NATIVE forEACH*********************/

Array.prototype.myEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this);
};

//tests
var arr = ['biggy smalls', 'bif tannin', 'boo radley', 'hans gruber'];
arr.myEach(function(word) {
    console.log(word);
});
//biggy smalls
//bif tannin
//boo radley
//hans gruber

/*****************NATIVE MAP*************************/

Array.prototype.myMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

//tests
var arrs = ['dic tanin', 'boo radley', 'hans gruber'];
var numbers2 = [1, 4, 9];

var goodT = arrs.myMap(function(n) {
    return n;
});

var squareRoot = numbers2.myMap(function(num) {
    return Math.sqrt(num);
});

console.log(goodT); // [ 'dic tanin', 'boo radley', 'hans gruber' ]
console.log(squareRoot); // [ 1, 2, 3 ]

/*****************NATIVE FILTER*************************/

Array.prototype.myFilter = function(callback, context) {
    arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

//tests
let numbers = [1, 20, 30, 80, 2, 9, 3];
let newNum = numbers.myFilter(function(n) {
    return n >= 10;
});
console.log(newNum); // [ 20, 30, 80 ]

/*****************NATIVE FIND*************************/

Array.prototype.myFind = function(callback){
    let result
    for (let i = 0; i < this.length; i++) {
      let isFound = callback(this[i], i, this)
      if(isFound){
        result = this[i]
        break //stop the loop if find that item
      }
    }
    return result
  }

 let array1 = [5, 12, 8, 130, 44];
 let number = array1.myFind(function(s) {
     return s >= 130;
 });
 console.log(number);// [ 130 ]


 /*****************NATIVE findIndex*************************/

 var findIndex = function(ar, cond) {
    var r, x;
    for (r in ar) {
      x = ar[r];
      if (cond(x)) return parseInt(r);
    }
  };
  
  var moreThanTwo = function(x) { return x < 29 }
  var t = findIndex([30, 37, 8, 66, 78, 96], moreThanTwo)


  console.log(t);// [ 2 ]