//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, and u as vowels for this Kata.

function getCount(str) {
  var vowelsCount = 0;
  var arr = str.split("").map(function(el){
    if(/[a|e|i|o|u]/.test(el)){
      vowelsCount += 1;
    }
  });
  return vowelsCount;
}

console.log(getCount("Bring your daylight. Bring your dark. Share your silence. Unpack your heart."));
//
// describe("Case 1", function(){
//     it ("should be defined", function(){
//         Test.assertEquals(getCount("abracadabra"), 5)
//     });
// });
