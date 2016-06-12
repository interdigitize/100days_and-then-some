//Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
  var numToAdd = parseInt(num);
  for(var i = (numToAdd - 1); i > 0; i--){
    numToAdd += i;
  }
  return numToAdd;
}

// keep this function call here
console.log(SimpleAdding("6"));
