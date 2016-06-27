//Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

function NumberAddition(str) {
  
  return str.split(/[^0-9]/).filter(function(el){
    return /[0-9]/.test(el);
  }).reduce(function(pre, cur){
    return parseInt(pre) + parseInt(cur);
  });
}

// keep this function call here
console.log(NumberAddition("902asdf9f93"));

// Input:"75Number9"
// Output:84
//
// Input:"10 2One Number*1*"
// Output:13
