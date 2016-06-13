//Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.

function WordCount(str) {
  var anArray = str.split(" ");
  return anArray.length;

}

// keep this function call here
console.log(WordCount("keep this function call here"));
