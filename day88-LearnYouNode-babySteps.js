// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

function add(process.argv){
  var array = process.argv;
  return array.reduce(function(pre, cur){
    return pre + cur;
  }), 2;
}

console.log(add(3,6,2,4));
