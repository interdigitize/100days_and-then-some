//Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// function scramble(str1, str2) {
//   var str1Arr = str1.split(""), str2Arr = str2.split("");
//
//      function letterPresent(letter){
//        for(var i = 0; i < str1Arr.length; i++){
//          if (letter === str1Arr[i]){
//            return true;
//          }
//        }
//      }
//      return str2Arr.map(letterPresent).reduce(function(pre, cur){
//        if (pre === true && pre === cur){
//          return true;
//        }
//        return false;
//      });
// }

//refactored
function scramble(str1, str2) {
  //split strings into arrays
  var str1Arr = str1.split(""), str2Arr = str2.split("");
  // create a copy of str1Arr
  var disappearingArr = str1Arr.slice();

  //this returns the final answer
  return str2Arr.reduce(function(trueOrFalse, letter){
     console.log(trueOrFalse);
      var ans;
       for(var i = 0; i < str1Arr.length; i++){
           if (letter === disappearingArr[i]){
             disappearingArr.splice(i, 1);
             ans = true;
             console.log(letter);
             console.log(disappearingArr);
           }
       }

       if(trueOrFalse === false){
         return false;
       }
       else if (ans === true || disappearingArr === []){
         return true;
       }
         return false;
     }, 0);

}


// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
//console.log(scramble('rkqodlw','world'));

// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
//console.log(scramble('cedewaraaossoqqyt','codewars'));

// str1 is 'katas' and str2 is 'steak' should return false.
//console.log(scramble('katas','steak'));

console.log(scramble('scriptjava','javascript'));


// TEST
// describe.('tests', function(){
//   Test.assertEquals(scramble("rkqodlw", "world"), true, "try again");
// })
