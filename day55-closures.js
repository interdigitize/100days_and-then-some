//CLOSURES

// function createBase(baseNumber){
//   return function(N){
//     return baseNumber + N;
//   }
// }
//
// var addSix = createBase(6);
// addSix(10);
// addSix(453);

function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

var c = counter();
c.add(5);
c.add(8);
console.log(c.retrieve());
