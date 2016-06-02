//you can run it here: http://jsbin.com/kejolezihi/edit?js,console

//define a function called chained that takes functions as arguments
function chained(functions) {
        // return an anonymous function that takes a value as an argument
        // this allows you to pass a value to reduce's callback function and set it as the initial value
        return function(value){
            // call the reduce method on the array of functions passed into chained and return it
            return functions.reduce(function(previousValue, currentValue, currentIndex, array){
            // evaluate the current function with the answer from the previous
            return currentValue(previousValue);
            //set the initial value to the value you want to call the first function with 
          }, value);
      };
}

//test functions
function f1(x){ return x*2;}
function f2(x){ return x+2;}
function f3(x){ return Math.pow(x,2);}
function f4(x){ return x.split("").concat().reverse().join("").split(" ");}
function f5(xs){ return xs.concat().reverse(); }
function f6(xs){ return xs.join("_"); }

//TEST 1
console.log("This is the answer: " + chained([f1,f2,f3])(0));


//TEST 2
console.log("This is the second answer: " + chained([f4,f5,f6])("lorem ipsum"));
