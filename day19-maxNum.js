/*
Given an array of negative/positive integers, find the largest element. DO NOT use `Math.max`.

Examples:

Input: [ 10, 30, 20 ]
Output: 30

Input: [ 5 ]
Output: [ 5 ]

Input: [ -1, -5, -10 ]
Output: -1
*/

function maxArr (numbersArray) {
  var maxNum = numbersArray[0];
  for(i=0; i < numbersArray.length; i++){
    if(numbersArray[i] > maxNum){
      maxNum = numbersArray[i];
        }
  }
  console.log(maxNum);
  return maxNum;  
}

maxArr([ -1, -5, -10 ]);
