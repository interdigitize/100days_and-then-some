//Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

function MeanMode(arr) {
  var arrTotal = arr.reduce(function(preNum, curNum){
    return preNum + curNum;
  });
  var arrMode = arr.sort(function(a,b){a-b}).filter(function(el, index){
    return el === arr[index-1];
  });

  if (arrTotal / arr.length === arrMode[0]){
    return 1;
  }
  else{
    return 0;
  }
}

console.log(MeanMode([4, 4, 4, 6, 2]));

// Input:1, 2, 3
// Output:0
//
// Input:4, 4, 4, 6, 2
// Output:1
