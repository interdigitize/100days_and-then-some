//Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.

function PowersofTwo(num) {
  var numCheck = num;
  while( 1 < numCheck){
    if (numCheck === 2){
      return true;
    }
    numCheck = numCheck/2;
  }
  return false;
}

console.log(PowersofTwo(36));



// Input:4
// Output:"true"
//
// Input:124
// Output:"false"
