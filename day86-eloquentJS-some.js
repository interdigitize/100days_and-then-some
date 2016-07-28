//Write the function "some", that behaves like the method, except that it takes the array as its first argument rather than being a method.


// //SOME with a for loop
// function some(array, isNan){
//   for(var i = 0; i< array.length; i++){
//     if (isNaN(array[i])){
//       return true;
//     }
//   }
//   return "";
// }


// //SOME with forEach
// function some(array, isNan){
//     var answer = false;
//     array.forEach(function(el){
//       if (isNaN(el)){
//         answer = true;
//       }
//     });
//     return answer;
// }

// //SOME with reduce
// function some(array, isNan){
//     return array.reduce(function(answer, cur, i){
//       if (isNaN(answer) || answer === true){
//         return true;
//       }
//       else if (isNaN(array[i])){
//         return true;
//       }
//       else {
//         return false;
//       }
//     });
// }

//SOME with reduce and ternary conditional
function some(array, isNan){
    return array.reduce(function(answer, cur, i){
      return isNaN(answer) || answer === true ? true : isNaN(array[i]) ? true : false;
    });
}

console.log(some([NaN, 3, 3], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
