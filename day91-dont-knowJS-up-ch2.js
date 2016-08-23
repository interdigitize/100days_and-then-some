//review EXERCISES

//var a;
//a = "hello world"; --> string
// a = 42; --> number
// a = true; --> boolean
// a = null; --> object
//a = undefined; --> undefined
//a = {b: "c"} --> object
//'typeof "abc"' //ES6 symbol — returns `"string"`, not `string`
//console.log(typeof a);

// OBJECTS
// var obj = {
//   a: "hello world",
//   b: 46,
//   c: false
// }
// console.log(obj.c);
// console.log(obj["a"]);

// var obj = {
//   a: "hello world",
//   b: 42
// };
// var b = "a";
// console.log(obj["b"]); // 42
// console.log(obj[b]); // hello world


// ARRAYS

// var arr = ["I, oh I, oh I...", 65, false ];
//
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr.length);
//
// console.log(typeof arr); //--> object
// console.log(Array.isArray(arr)); //--> true

//FUNCTIONS
// function foo(){
//   return 42;
// }
//
// console.log(typeof foo);
// console.log(typeof foo());
// console.log(foo.bar = "wait until the shine wears off");

//BUILT IN TYPES and SUBTYPES

// var a = "hello world";
// var b = 3.14;
//
// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(b.toFixed(4));


// EXPLICIT COERCION: you can see obviously from the code that a conversion from one type to another will occur
// var a = "42";
// var b = Number(a);
// console.log(typeof a);
// console.log(typeof b);

// IMPLICIT COERCION: type conversion happens as more of a non-obvious side effect of some other operation
// var a = "42";
// var b = a * 1;
// console.log(typeof a);
// console.log(typeof b);

//COERCION to BOOLEAN

//FALSY
// "" (an empty string)
// 0, -0 NaN (invalid numbers)
// null, undefined
// false

//TRUTHY
// "strings" (strings)
// 65 (numbers)
// true
// [... ], (arrays)
// {...}, (objects)
// function (){}, (functions)

//EQUALITY
//`==` checks for value equality
// `===` checks for both value and type equality
//`===` checks for value equality without allowing coercion — often called strict equality

// * If either value (aka side) in a comparison could be the `true` or `false` value, avoid `==` and use `===`.
// * If either value in a comparison could be of these specific values (`0`, `""`, or `[]` -- empty array), avoid `==` and use `===`.
// * In *all* other cases, you're safe to use `==`. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

// var a = "42";
// var b = 42;
// console.log(a == b);
// console.log(a === b);

//Arrays are coerced to strings
// var a = [1,2,3];
// var b = [1,2,3];
// var c = "1,2,3";
// console.log(a == c);
// console.log(b == c);
// console.log(a == b);

//INEQUALITY
// there are no strict comparison rules for INEQUALITY operators
// var a = 41;
// var b = "42";
// var c = "43";
// console.log(a < b);
// console.log(b < c);

// var a = 42;
// var b = "foo";
// console.log(a < b);
// console.log(a > b);
// console.log(a == b); // all false because b is coerced to NaN which is falsey

// function foo (){
//   var a = 1;
//   if (a >= 1){
//     let b = 2;// let is new in ES6 — a variable for only the if statement
//     while (b < 5){
//       let c = b * 2; // belongs only to the while loop
//       b++;
//
//       console.log(a+c);
//     }
//   }
// }
// console.log(foo());

// //SWITCH case
// //The `break` is important if you want only the statement(s) in one `case` to run. If you omit `break` from a `case`, and that `case` matches or runs, execution will continue with the next `case`'s statements regardless of that `case` matching. This so called "fall through" is sometimes useful/desired:
// switch(a){
//   case 2:
// 	case 10:
//     //Here, if `a` is either `2` or `10`, it will execute the "some cool stuff" code statements.
// 		// some cool stuff
// 		break;
// 	case 42:
// 		// other stuff
// 		break;
// 	default:
// 		// fallback
// }

// Terenary Conditionals
// var a = 40;
// var b = (a > 41) ? "hello" : "world";
// console.log(b);

//STRICT Mode
//ES5 added a "strict mode" to the language, which tightens the rules for certain behaviors.
//
// ```js
// function foo() {
// 	"use strict";
//
// 	// this code is strict mode
//
// 	function bar() {
// 		// this code is strict mode
// 	}
// }
//
// // this code is not strict mode
// ```
//
// Compare that to:
//
// ```js
// "use strict";
//
// function foo() {
// 	// this code is strict mode
//
// 	function bar() {
// 		// this code is strict mode
// 	}
// }
//}

//// this code is strict mode
//```
