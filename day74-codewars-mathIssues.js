//Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
//
Math.round = function(number) {
var breakItUp = number.toString().split("");
console.log(breakItUp);
if(parseInt(breakItUp[2]) >= 5){
  return parseInt(breakItUp[0]) + 1;
}
return parseInt(breakItUp[0]);
};

Math.ceil = function(number) {
  var breakItUp = number.toString().split("");
  if(breakItUp[2] !== undefined){
    return parseInt(breakItUp[0]) + 1;
  }
  return number;
};

Math.floor = function(number) {
  var breakItUp = number.toString().split(".");
  return parseInt(breakItUp[0]);
};

console.log(Math.round(7.12));

// Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
// Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');
//
// Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
// Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');
//
// Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
// Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');
