//Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

//MY SOLUTION

function ArrayAdditionI(arr) {
  var sortedArr = arr.sort(function(a,b){return a - b;}).reverse();
  var largestNum = sortedArr.shift();
  var arrSum = sortedArr.reduce(function(previousNum, currentNum){
    return previousNum + currentNum;
  });
  function allButOne(arr2){
     for(var i = 0; i < arr2.length; i++){
      var newSum = arrSum - arr2[i];
      if(newSum === largestNum){
        return newSum;
      }
    }
    return false;
  }

  function twoNums(arr2){
    for(var i = 1; i < arr2.length; i++){
      var newSum = arr2[0] + arr2[i];
      if(newSum === largestNum){
        return newSum;
      }
    }
    return false;
  }

  function threeNums(arr2){
    for(var i = 2; i < arr2.length; i++){
      var newSum = arr2[0] + arr2[i] + arr2[i-1];
      if(newSum === largestNum){
        return newSum;
      }
    }
    return false;
  }

  if (largestNum === arrSum){
    return true;
  }
  else if(largestNum === allButOne(sortedArr)){
    return true;
  }
  else if (largestNum === twoNums(sortedArr)){
    return true;
  }
  else{
    return false;
  }

}

console.log(ArrayAdditionI([10,2,16,1,5]));

// Input:5,7,16,1,2
// Output:"false"
//
// Input:3,5,-1,8,12
// Output:"true"


// A MORE SAVVY WAY...

// function ArrayAddition(arr) {
//
//   // get largest number and remove it from array
//   var sum = Math.max.apply(null, arr);
//   arr.splice(arr.indexOf(sum), 1);
//
//   // clever way to get rid of negative values
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       sum -= arr[i];
//       arr[i] = 0;
//     }
//   }
//
//   // table to track elements
//   var table = [[]];
//
//   // fill first row
//   for (var i = 1; i <= sum; i++)
//     table[0][i] = false;
//
//   // fill first column
//   for (var i = 0; i <= arr.length; i++) {
//     table[i][0] = true;
//     if (i !== arr.length)
//       table.push([]);
//   }
//
//   // dynamic programming solution
//   for (var i = 1; i <= arr.length; i++) {
//     for (var j = 1; j <= sum; j++) {
//       table[i][j] = table[i-1][j];
//       if (table[i][j] === false && j >= arr[i-1]) {
//         table[i][j] = table[i][j] || table[i-1][j-arr[i-1]];
//       }
//     }
//   }
//
//   return table[arr.length][sum];
//
// }
//
// ArrayAddition([1, 2, 6, 4, 7, 12]);
