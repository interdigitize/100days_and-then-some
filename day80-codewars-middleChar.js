// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//REFACTORED

function getMiddle(word){
  var l = word.length;
  return l % 2 !== 0 ? word.charAt(l/2) : word.substr(((l/2)-1), 2);
}
console.log(getMiddle("A"));


// function getMiddle(word){
//   var l = word.length;
//   if(l % 2 !== 0){
//     return word.charAt(l/2);
//   }
//   return word.substr(((l/2)-1), 2);
// }
// console.log(getMiddle("A"));
//




// Test.describe("GetMiddle", function() {
//   Test.it("Tests", function() {
//     Test.assertEquals(getMiddle("test"),"es");
//     Test.assertEquals(getMiddle("testing"),"t");
//     Test.assertEquals(getMiddle("middle"),"dd");
//     Test.assertEquals(getMiddle("A"),"A");
//   });
// });
