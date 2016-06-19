//Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

function LetterCountI(str) {
  var words = str.replace(/\s|[^a-z]/gi, " ").split(" ");
   return words.map(function(el, index){
    var letters = el.split("");
    var letterCharCodes = letters.map(function(eachLetter, letterIndex){
      return letters[letterIndex].charCodeAt(eachLetter);
    });
      letterCharCodes = letterCharCodes.sort(function(a,b){return a-b;});


      var letterCount = 1;
      return letterCharCodes.map(function(charCo, index){
        if(letterCharCodes[index - 1] === letterCharCodes[index] && letterCharCodes[index] !== letterCharCodes.length){
          letterCount++;
        }
        console.log([charCo, letterCount])
        return [charCo, letterCount]
      }).filter(function(el, index){if (el[1] >= 2){return el;};});

  });
}
console.log(String.fromCharCode(111));

// keep this function call here
console.log(LetterCountI("Todoy is"));

// Input:"Hello apple pie"
// Output:"Hello"
//
// Input:"No words"
// Output:-1
