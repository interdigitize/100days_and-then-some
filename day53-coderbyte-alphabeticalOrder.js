//Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 
function AlphabetSoup(str) {
  var letters = str.split("");
  var codes = letters.map(function(letter){
    return letter.charCodeAt(0);
  }).sort(function(a, b) {
    return a - b;
  });
  return codes.map(function(code){
    return String.fromCharCode(code);
  }).join('');
}

// keep this function call here
console.log(AlphabetSoup("readline"));
