//Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Math.round = function(number) {
  var compare = parseInt(number.toString().charAt(number.toString().lastIndexOf(".") + 1));
  var theNum = number.toString().split(".");
  if(compare >= 5 && compare !== number){
    return parseInt(theNum[0]) + 1;
  }
  return parseInt(theNum[0]);
};

Math.ceil = function(number) {
  var compare = parseInt(number.toString().charAt(number.toString().lastIndexOf(".") + 1));
  var theNum = number.toString().split(".");
  if(compare !== number){
    return parseInt(theNum[0]) + 1;
  }
  return number;
};

Math.floor = function(number) {
  var theNum = number.toString().split(".");
  return parseInt(theNum[0]);
};

console.log(Math.round(5));

// Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
// Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');
//
// Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
// Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');
//
// Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
// Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');
