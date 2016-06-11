function FirstFactorial(num) {
    var answer = 1;
    for(var i = num; i > 0; i--){
        answer *= i;
    }
    return answer
}
console.log(FirstFactorial(4)); //24


// function FirstFactorial(num) {
//     var factorialArray = [];
//     for(var i = num; i > 0; i--){
//         factorialArray.push(i);
//     }
//     return factorialArray.reduce(function(previous, current){
//         return previous * current;
//     });
// }
// console.log(FirstFactorial(4)); //24
