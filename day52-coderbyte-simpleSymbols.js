//Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
function SimpleSymbols(str) {
  var testResult;
  for(var i = 0; i<str.length;i++){
    if (/[a-z]/gi.test(str[i])){
      testResult = /\+[a-z]\+/gi.test(str.substr((i-1), (i+2)));
      if(testResult === true){
      }
      else {
        return false;
      }
    }
  }
  if(testResult === true){
    return true;
  }
  return false;
}

console.log(SimpleSymbols("+z+z+==+a+"));
