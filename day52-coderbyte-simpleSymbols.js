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
