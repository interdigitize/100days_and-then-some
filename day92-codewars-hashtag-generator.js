// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!
//
// Here's the deal:
//
// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.


function generateHashtag (str) {
  if (str.length > 140 || str.length === 0){return false;}
  var makeCap = str.split(" ");
  return "#" + makeCap.map(function(word){
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }).join("");
}

console.log(generateHashtag("Whats up world?"));

// Example Input to Output:
// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
// " Hello World " => "#HelloWorld"
