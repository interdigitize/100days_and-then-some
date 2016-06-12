//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {
  var words = sen.replace(/[^\w/]/gi, " ").split(" ");
  console.log(words)
  return words.reduce(function(longest, current){
    if (current.length > longest.length){
      return current;
    }
    return longest;
  });
}

console.log(LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~"));
