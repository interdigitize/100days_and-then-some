function FirstFactorial(num) {
    var factorialArray = [], decrement=num, answer = 1;
    for(var i = 0; i < num; i++){
        factorialArray.push(decrement--);
    }
    return factorialArray.reduce(function(previous, current){
        return answer = previous * current;
    });
}

console.log(FirstFactorial(4));
