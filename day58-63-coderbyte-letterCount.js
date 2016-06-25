//Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

function LetterCountI(str) {

  // remove punctuation and split the string into an array of words
  var words = str.replace(/\s|[^a-z]/gi, " ").split(" ");

  var letterCountTally = words.map(function(el, index){
    // split the words into an array of letters
    var letters = el.split("");
    // convert letters to char codes and sort them
    var letterCharCodes = letters.map(function(eachLetter, letterIndex){
      return eachLetter.charCodeAt(eachLetter);
    }).sort(function(a,b){return a-b;});

    // count the number of each character and return the letter count
    var letterCount = 1;
    var letterCountArray = letterCharCodes.map(function(charCo, index){
      if(letterCharCodes[index - 1] === charCo){
        letterCount++;
      }
      else{
        letterCount = 1;
      }
      return letterCount;
    });
    // sort the letter count and push the first to a new array
    var answerArray = [];
    var sorted = letterCountArray.sort().reverse();
    answerArray.push(parseInt(sorted[0]));
    return answerArray;
  });
  letterCountTally = letterCountTally.join().split(",");

  var anArray = [ 1, 1 ];

  //find the index of the word with the biggest letter count
  var theAnswerIndex = 0;
  var theNum = 0;
  for(var i = 0; i < letterCountTally.length; i++){

    if (parseInt(letterCountTally[i]) > theNum){
      theAnswerIndex = i;
      theNum = parseInt(letterCountTally[i]);
    }
  }
  //return the word

  if (theNum > 1) {
    return words[theAnswerIndex];
  }
  else{
    return -1;
  }
}

// keep this function call here
console.log(LetterCountI("Today is an epic day in Mississippi!"));

// Input:"Hello apple pie"
// Output:"Hello"
//
// Input:"No words"
// Output:-1
