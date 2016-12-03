//Write a program that will calculate the number of trailing zeros in a factorial of a given number.

function trailingZerosIn (n) {
  var theFac = function factorial(n) {
    if(n === 0){
      return 1;
    }
    else{
      return n *= factorial(n-1);
    }
  }
var arr = theFac(n).toString().split("").reverse();
var answer = 0;
 for(i = 0; i < arr.length; i++){
   if (arr[i] === "0"){
    answer = answer + 1;
   }
   else{
      break;
   }
 }
  return theFac(n) + " has " + parseInt(answer) + " trailing 0's.";
}

console.log(trailingZerosIn(12));

// trailingZerosIn(12) = 2 # 1 * 2 * 3 .. 12 = 479001600
// that has 2 trailing zeros 4790016(00)
