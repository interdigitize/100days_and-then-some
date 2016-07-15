//Square every digit of a number.
//For example, if we run 9119 through the function, 811181 will come out.
//Note: The function accepts an integer and returns an integer

function squareDigits(num){
  return parseInt(num.toString().split("").map(function(int){
    return int * int;
  }).join(""));
}

console.log(squareDigits(9119));

//Test.assertEquals(squareDigits(9119), 811181);
