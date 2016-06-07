//STRING METHODS
//http://www.w3schools.com/js/js_string_methods.asp

//charAt - gets the character from a string by its position
var str = "I love the smell of summer";
console.log(str.charAt(0));
console.log(str.charAt(11));

//charCodeAt - returns a unicode num, fromCharCode converts from unicode to a character
var str = "chirpy birds";
console.log(String.fromCharCode(str.charCodeAt(0)-1));

//toUpperCase and toLowerCase
var str = "ahhhhhh";
console.log(str.toUpperCase());
console.log(str.charAt(0).toUpperCase());

//split – convert a string to an array
var str = "What should I eat for breakfast?"
console.log(str.split(" "));

//replace – replace a part of a string
var str = "Something with eggs."
var str2 = str.replace("eggs", "bacon");
console.log("first string: " + str + "\n second string: " + str2);

//substr - return a substring of the string. The first parameter is the starting position. The second is the length
var str = "Mmmm, protein and spinach."
var part = str.substr(0, 6) + str.substr(18, 8);
console.log(part);



//REGULAR EXPRESSIONS — patterns you define that are searched for in a string
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

var pattern = /(a|b|c)/gi;
//searches for "a", "b" and "c"
//g = global — finds all matches, not just the first
//i = case-insensitive — looks for both "a" & "A"...

//replace all "a" with a string
var str = "How do you like to eat your apple?";
console.log(str.replace(/a/gi, "-"));

//replace numbers with x
var str = "For more information, call 1-800-555-5555."
console.log(str.replace(/[0-9]/gi, "X"));

//get words that start with a letter
var str = "Hey 4get these words 3_please";
var wor = str.match(/\b[a-z]+/gi);
console.log(wor);

//find the position in the string where the character A is exactly 2 spaces away from B

var str = "ABxxAxxBABxxAxxB";
var pos = str.search(/A..B/gi);
console.log(pos);
