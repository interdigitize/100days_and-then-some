//Given an array of numbers, find the largest pair sum in the array.
// Input array contains minimum two elements and every element is a number.

function largestPairSum(numbers)
{
  sortedNums = numbers.sort(function(a,b){return b-a;});
  return sortedNums[0] + sortedNums[1];
}

console.log(largestPairSum([99,2,2,23,19]));

// test.expect(largestPairSum([-10, -8, -16, -18, -19]) === -18 , "Sum should be -18");
// test.expect(largestPairSum([10,14,2,23,19]) === 42 , "Sum should be 42");
// test.expect(largestPairSum([99,2,2,23,19]) === 122 , "Sum should be 122");
