//Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

function SwapCase(str) {
  var answer = [];
  for(var i = 0; i < str.length; i++){
    var char = str.charCodeAt(i), letter = str.charAt(i);

    if (97 <= char && char <= 122){
      answer.push(letter.toUpperCase());
    }
    else if (65 <= char && char <= 90){
      answer.push(letter.toLowerCase());
    }
    else{
      answer.push(letter);
    }
  }
  return answer.join("");
}

console.log(SwapCase("Sup DUDE!!?"));




// Input:"Hello-LOL"
// Output:"hELLO-lol"
//
// Input:"Sup DUDE!!?"
// Output:"sUP dude!!?"
