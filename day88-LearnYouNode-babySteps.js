// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

// //Official solution
// var result = 0
// for (var i = 2; i < process.argv.length; i++)
// result += Number(process.argv[i])
//
// console.log(result)

// //NOTES the difference between Number and parseInt
// // parsing:
// parseInt("20px");       // 20
// parseInt("10100", 2);   // 20
// parseInt("2e1");        // 2
//
// // type conversion
// Number("20px");       // NaN
// Number("2e1");        // 20, exponential notation


//third attempt -- refactored
var result = process.argv.filter(function(el){
  return /\d/.test(Number(el));
}).reduce(function(pre, cur){return Number(pre) + Number(cur);});

console.log(result);

// //third attempt -- PASSED!!
// console.log(process.argv.filter(function(el){
//   return /\d/.test(parseInt(el, 10));
// }).reduce(function(pre, cur){return parseInt(pre, 10) + parseInt(cur, 10);}));


//second attempt —- passed run, but not verify. I need to use process.argv
//create a new array of filtered digits, add them together, and return the sum
// function add(array){
//   var numArray = array.filter(function(el){
//     return /\d/.test(parseInt(el, 10));
//   }).reduce(function(pre, cur){return parseInt(pre, 10) + parseInt(cur, 10);});
//   console.log(numArray);
//   return numArray;
// }

// add(['node', '/path/to/your/program.js', '1', '2', '3']);


// // first attempt — didn't pass. I think it may be because it modifys the array and they tested with something different than process.argv... or because I forgot to console.log the sum...
// function add(array){
//   var startWithTwo = array.splice(2, array.length-2);
//   return startWithTwo.reduce(function(pre, cur){
//     return parseInt(pre) + parseInt(cur);
//   });
// }
