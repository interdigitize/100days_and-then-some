// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).


//add a forLoop that creates a new array of just numbers from the argument/s
function add(array){
  return numArray = array.filter(function(el){
    return parseInt(el, 10) !== NaN; //why is this filter returning everything???
  });
  // return parseInt("node", 10);
  // return startWithTwo.reduce(function(pre, cur){
  //   return parseInt(pre) + parseInt(cur);
  // });
}

console.log(add(['node', '/path/to/your/program.js', '1', '2', '3']));


// // first attempt — didn't pass. I think it may be because it modifys the array and they tested with something different than process.argv
// function add(array){
//   var startWithTwo = array.splice(2, array.length-2);
//   return startWithTwo.reduce(function(pre, cur){
//     return parseInt(pre) + parseInt(cur);
//   });
// }
