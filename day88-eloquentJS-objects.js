//Objects and prototypes

// var rabbit = {};

// rabbit.speak = function(line) {
//   console.log("The rabbit says '" + line + "'");
// }
//
// rabbit.speak("It is good to be alive right about now.");
//
// console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
//
// var protoRabbit = {
//   speak: function(line){
//     console.log("The " + this.type + " rabbit says '" + line + "'");
//   }
// };
//
// var killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("Allo!");
// console.log(killerRabbit);

// Rabbit.prototype.dance = function() {
//   console.log("The " + this.type + " rabbit dances a jig.");
// };
// killerRabbit.dance();
// → The killer rabbit dances a jig.

// var map = {};
// function storePhi(event, phi){
//   map[event] = phi;
// }
// //
// storePhi("pizza", 0.069);
// storePhi("touched tree", -0.081);
// Object.prototype.nonsense = "hi";
// for(var name in map)
// console.log(name);
// console.log("nonsense" in map);
// console.log("toString" in map);

//delete Object.prototype.nonsense;


//All properties that we create by simply assigning to them are enumerable. The standard properties in Object.prototype are all nonenumerable, which is why they do not show up in such a for/in loop.
// Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});
// for(var name in map)
// console.log(name);
// console.log(map.hiddenNonsense);
// console.log(map.hasOwnProperty("toString"));
//
// When you are worried that someone (some other code you loaded into your program) might have messed with the base object prototype, I recommend you write your for/in loops like this:
//
// for (var name in map) {
//   if (map.hasOwnProperty(name)) {
//     // ... this is an own property
//   }
// }

// use pass in null to create a new object not based on a prototype
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("pizza" in map);
