//Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.
function VowelCount(str) {
  var answer = 0;
  for(var i = 0; i < str.length ; i++){
    if ( str[i] === "a" | str[i] === "e" | str[i] === "i" | str[i] === "o" | str[i] === "u"){
      answer += 1;
    }
  }
  return answer;
}

// keep this function call here
console.log(VowelCount("readline"));
