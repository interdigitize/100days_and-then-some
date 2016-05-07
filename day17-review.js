/********************
  Section A
*********************/

// 1. Create a variable that holds a string
var str = "a string";

// 2. Create a variable that holds a number
var num = 9;

// 3. Create a variable that holds a boolean
var boolean = true;

// 4. Create a function `isType` that takes two parameters:
//   A. a data-type (String)
//   B. a value
function isType(str, value){

}

// The function should return true if the data-type of the second parameter
// matches the string passed in as the first parameter. Otherwise, it should
// return false
function isType(str, value){
  if (typeof str === typeof value){
    return true;
  }
  else {
    return false;
  }
}

// 5. Use `console.log` to check whether or not your `isType` function works.
function isType(str, value){
  if (typeof str === typeof value){
    console.log("true");
    return true;
  }
  else {
    console.log("false");
    return false;
  }
}

// 6. Create a function `testAndLogType` that takes two parameters:
  // A. a data-type (String)
  // B. a value
// Note: you must use `isType` from above in the function
// Use the below comments to figure out what the function should do

// testAndLogType('string', 'hello world')
// ^ should log the following to the console: 'Great job! "hello world" is a string'
// testAndLogType('string', 602)
// ^ should log the following to the console: 'Sorry! "602" is a number, not a string'
function isType(str, value){
  if (typeof str === typeof value){
    console.log("Great job! " + value + " is a string");
    return true;
  }
  else {
    console.log("Sorry! " + value + ' is a number, not a string');
    return false;
  }
}

function testAndLogType(str, value){
  return isType(str, value);
}

// 7. Use `testAndLogType` to check the variables you created from questions 1, 2, and 3
testAndLogType('string', 'hello world');
testAndLogType('string', 602);

/********************
  Section B
*********************/

// 1. Write a function `isSingleCharacter` that takes a single parameter:
//   A. a character (String)
// The function should return false if the first parameter is not a string or
// if it is longer than one character. Otherwise, it should return true
function isSingleCharacter(oneChar){
  if (typeof onChar !== "string"){
    return false;
  }
  else if (onChar.length > 1){
    return false;
  }
  else {
    return true;
  }
}

// Use `console.log` to check whether `isSingleCharacter` works correctly.
function isSingleCharacter(oneChar){
  if (typeof oneChar !== 'string'){
    console.log("Sorry, not a string");
    return false;
  }
  else if (oneChar.length > 1){
    console.log("Sorry, too long");
    return false;
  }
  else {
    console.log("word");
    return true;
  }
}

isSingleCharacter("a");
isSingleCharacter("Hi");
isSingleCharacter(8);


// 2. Write a function `countCharacters` that takes two parameters:
//   A. A single character (String)
//   B. A word or sentence (String)
// The function should return the number of times the first parameter is used in the second.
// Ex: countCharacters('a', 'the awesome apple') // should return 2
// Note: You must use a for-loop in your function
// Note: If the first parameter is more than a single character or is
// not a string, the function should end immediately, returning 'undefined' and
// logging an error to the console ( Hint: use `isSingleCharacter`)

function isSingleCharacter(oneChar){
  if (typeof oneChar !== 'string'){
    console.log("Sorry, not a string");
    return 'undefined';
  }
  else if (oneChar.length > 1){
    console.log("Sorry, too long");
    return 'undefined';
  }
  else {
    console.log("word");
    return true;
  }
}

function countCharacters(oneChar, wordPlus){
  var charCheck = isSingleCharacter(oneChar);
  if(charCheck === 'undefined'){
    return;
  }
  var toArray = wordPlus.split("");
  var charCount = 0;
  for(var i = 0; toArray.length > i ; i++){
    if(toArray[i] === oneChar){
      charCount++;
    }
  }
  console.log(charCount);
  return charCount;
}


/********************
  Section C
*********************/

// 1. Write a function `add` that takes two parameters:
//   A. a number (Number)
//   B. a second number (Number)
// The function should return the result of adding the first parameter and the second parameter
function add (num1, num2){
  return num1 + num2;
}

// 2. Write a function `multiply` that takes two parameters:
//   A. a positive number (Number)
//   B. a second positive number (Number)
// The function should return the result of multiplying the first parameter and the second parameter
// Note: You cannot use the `*` operator
// Note: You must use `add` from above and a while-loop in the function


function multiply (num1, num2){
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  var i = 0, product = 0;
  while(i < num2){
    product += num1;
    i++;
  }
  console.log(product);
  return product;
}

// 3. Write a function `pow` that takes two parameters:
//   A. a base number (Number)
//   B. an exponent (Number)
// The function should return the first parameter to the power of the second parameter
// Ex: pow(3, 2)  // should return 9
//     pow(2, 5)  // should return 32
//     pow(3, 40) // should return 12157665459056929000
// Note: you must use `multiply` from above and a for-loop in the function
function pow (baseNum, power){
  var answer = 1;

  for(var i = 0; i < (power) ; i++){
    answer *= multiply(baseNum, 1);
    console.log(answer);
  }
  console.log(answer);
  return answer;

}

//pow(3, 2);  // should return 9
//pow(2, 5);  // should return 32
//pow(3, 40); // should return 12157665459056929000





// Extra: Go read about the function `pow` that you wrote in Section C: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
