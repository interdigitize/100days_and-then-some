//You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.
//Subsequent calls to the resulting function should have no effect (and should return undefined).pho

function once(fn) {
  var ex = false;
  return function(value) {
    if(!ex){
      ex = true;
      return fn(value);
    }
  }
}

// var sqr = once(function(x){ return x * x})
// console.log(sqr(2)); // -> 4
// console.log(sqr(4)); // -> undefined

// var logOnce = once(function(x){return console.log(x)})
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> undefined

// describe("case 2", function(){
//   it("console.log foo", function(){
//     Test.assertEquals(logOnce("foo"), "foo")
//     Test.assertEquals(logOnce("bar"), undefined)
//   });
// });

// var add = once(function(a,b){ return a + b });
// describe("case 3", function(){
//   it("add numbers the first time through", function(){
//     Test.assertEquals(add(2,3), 5)
//     Test.assertEquals(add(5,9), undefined)
//     Test.assertNotEquals(add(2,3), 5)
//   });
// });
