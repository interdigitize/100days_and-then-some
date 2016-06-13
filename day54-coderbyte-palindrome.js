//Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

function Palindrome(str) {
  // var inputStr = str.split(" ").join("");
  var inputStr = str.replace(/ /g, "");
  var revStr = str.split(" ").map(function(current){
    return current.split("").reverse().join("");
  }).reverse().join("");

  if (inputStr === revStr){
    return true;
  }
  return false;
}

// keep this function call here
console.log(Palindrome("never odd or even"));
