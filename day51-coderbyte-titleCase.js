function LetterCapitalize(str) {
  var strArray = str.split("");
  return strArray.map(function(currentValue, index){
    if (strArray[index - 1] === " " || strArray[index - 1] === undefined){
      return strArray[index].toUpperCase();
    }
    else{
      return strArray[index];
    }
  }).join("");
}
console.log(LetterCapitalize("this is another example`"));

// .replace isn't the right method here... 
// function LetterCapitalize(str) {
//   for(var i = 0; i < str.length; i++){
//     if (str.charAt(i) === " "){
//       str = str.replace(str.charAt(i + 1), str.charAt(i + 1).toUpperCase());
//     }
//   }
//   return str;
// }
// console.log(LetterCapitalize("this is another example`"));
