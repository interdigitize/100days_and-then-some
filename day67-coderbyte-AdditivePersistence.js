//Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

function AdditivePersistence(num) {
  var i = 0;
  if(num < 10){
    return i;
  }
  var numArr = num.toString().split("");
  while (true){
    i++;
    var reducedNum = numArr.reduce(function(pre, cur){
      return parseInt(pre) + parseInt(cur);
      });
    if(reducedNum < 10){
      return i;
    }
    numArr = reducedNum.toString().split("");
  }

}

// keep this function call here
console.log(AdditivePersistence(2718));



// Input:4
// Output:0
//
// Input:19
// Output:2
