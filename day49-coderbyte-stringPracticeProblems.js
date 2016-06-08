//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str){
  str = str.split("");
  return str.map(function(letter, index, array){
    letter = String.fromCharCode(array[index].charCodeAt(letter)+1);
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
    // if(letter === /(a|e|i|o|u)/) this doesn't work
    {
      letter = letter.toUpperCase()
    }
    return letter;
  }).join("");
}

console.log(LetterChanges("dweet dwe dow"));
