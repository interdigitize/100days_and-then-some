//Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

function SecondGreatLow(arr) {
  //sort the array ascending by value
  var arrSort = arr.sort(function(a,b){return a-b;});
  //filter out duplicate numbers
  arrSort = arrSort.filter(function(el, index){
    return el !== arrSort[index-1];
  })
  //Check if the array only contains 2 numbers. If so, return the last then the first (second to first is the last...)
  if(arr.length === 2){
    return arrSort[1] + " " + arrSort[0];
  }
  //for all other cases return the second and second to last values
  else{
    return arrSort[1] + " " + arrSort[arrSort.length - 2];
  }
}

console.log(SecondGreatLow([1, 42, 42, 180]));
//
// Input:1, 42, 42, 180
// Output:"42 42"
//
// Input:4, 90
// Output:"90 4"
