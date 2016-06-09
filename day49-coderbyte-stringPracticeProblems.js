//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

//SOLVED with for loops

function LetterChanges(str){
  var changeChar = "", answer = "";
  for (var i = 0; i <str.length; i++){
    changeChar += str[i].replace(/[a-y]/gi, String.fromCharCode(str.charCodeAt(i)+1));
  }
  changeChar = changeChar.replace("z", "a");
  for (var i = 0; i <str.length; i++){
    answer += changeChar[i].replace(/(a|e|i|o|u)/g, changeChar[i].toUpperCase());
  }
  return answer;
}
console.log(LetterChanges("dun dun duh"));



// function LetterChanges(str){
//   str = str.split("");
//   return str.map(function(letter, index, array){
//     letter = String.fromCharCode(array[index].charCodeAt(letter)+1);
//     if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
//     {
//       letter = letter.toUpperCase()
//     }
//     return letter;
//   }).join("");
// }
//
// console.log(LetterChanges("dweet dwe dow"));
