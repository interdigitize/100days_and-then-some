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

//RegEx http://eloquentjavascript.net/09_regexp.html
// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// \b. A word boundary can be the start or end of the string or any point in the string that has a word character (as in \w) on one side and a nonword character on the other.
// .	Any character except for newline

// Knowing precisely what characters to backslash-escape when writing regular expressions requires you to know every character with a special meaning. For the time being, this may not be realistic, so when in doubt, just put a backslash before any character that is not a letter, number, or whitespace.

// When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once. Thus, /\d+/ matches one or more digit characters.
// The star (*) has a similar meaning but also allows the pattern to match zero times. Something with a star after it never prevents a pattern from matching—it’ll just match zero instances if it can’t find any suitable text to match.
//A question mark makes a part of a pattern “optional”, meaning it may occur zero or one time.
//To indicate that a pattern should occur a precise number of times, use curly braces. Putting {4} after an element, for example, requires it to occur exactly four times. It is also possible to specify a range this way: {2,4} means the element must occur at least twice and at most four times.
//To invert a set of characters—that is, to express that you want to match any character except the ones in the set—you can write a caret (^) character after the opening bracket.

//regex METHODS = test, exec, match

//EXAMPLES
// /abc/	A sequence of characters
// /[abc]/	Any character from a set of characters
// /[^abc]/	Any character not in a set of characters
// /[0-9]/	Any character in a range of characters
// /x+/	One or more occurrences of the pattern x
// /x+?/	One or more occurrences, nongreedy
// /x*/	Zero or more occurrences
// /x?/	Zero or one occurrence
// /x{2,4}/	Between two and four occurrences
// /(abc)/	A group
// /a|b|c/	Any one of several patterns
// /\d/	Any digit character
// /\w/	An alphanumeric character (“word character”)
// /\s/	Any whitespace character
// /./	Any character except newlines
// /\b/	A word boundary
// /^/	Start of input
// /$/	End of input
