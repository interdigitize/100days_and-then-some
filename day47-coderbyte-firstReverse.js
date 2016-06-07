function FirstReverse(str) {
  var arrayOfLetters= str.split("").reverse().join("");
  return arrayOfLetters;
}

// keep this function call here
console.log(FirstReverse("reverse me"));
