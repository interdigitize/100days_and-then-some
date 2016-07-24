// Write a function that accepts two arguments: an array of integers and another integer n.
// Determine the number of times where two integers in the array have a difference of n.

const intDiff = (arr, n) => {
  var answer = 0;
  arr.reduce(function (pre, cur){
    console.log("cur-pre: ", cur - pre);
    if (cur - pre === n){
      answer += 1;
    }
    return cur;
  });
  console.log(answer);

  return answer;
}

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4))
// describe("solution", function(){
//   it("should work for basic test", function(){
//     Test.assertEquals(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
//     Test.assertEquals(intDiff([1, 1, 3, 3], 2), 4);
//   });
// });
