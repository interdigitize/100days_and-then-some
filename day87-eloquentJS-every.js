//Write the function "every", that behaves like the method, except that it takes the array as its first argument rather than being a method.

// // Every with a for loop
// function every(array, isNaN){
//   for(var i = 0; i < array.length;i++){
//     if(!isNaN(array[i])){
//       return false;
//     };
//   }
//   return true;
// }

// // Every with forEach
// function every(array, isNaN){
//   var answer = true;
//   array.forEach(function(el){
//     if(!isNaN(el)){
//       answer = false;
//     }
//   });
//   return answer;
// }

// // Every with Reduce
// function every(array, isNaN){
//   return array.reduce(function(answer, cur){
//     if(!isNaN(cur) | answer === false){
//       return false;
//     }
//     return true;
//   });
// }

// every with reduce and a terinary conditional
function every(array, isNaN){
  return array.reduce(function(answer, cur){
    return !isNaN(cur) | answer === false ? false : true;
  });
}


//console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
