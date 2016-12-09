//Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
  //split strings into arrays
  var str1Arr = str1.split(""), str2Arr = str2.split("");
  // create a copy of str1Arr
  var disappearingArr = str1Arr.slice();

  //this returns the final answer
  return str2Arr.reduce(function(trueOrFalse, letter){
      var ans;
      // true or false needs to be returned to the accumulator for the final answer. I moved this to the top so if it is already false, it won't run the other lines of code,
      if(trueOrFalse === false){
        return false;
      }
       // loops through each letter of disappearingArr
       for(var i = 0; i < disappearingArr.length; i++){
           // compares a str2Arr letter to a disappearingArr letter
           if (letter === disappearingArr[i]){
             // if they are equal, it removes the letter
             disappearingArr.splice(i, 1);  // I think this is the problem. It appears to remove all instances of a letter rather than just the first.
             // sets the var ans === true
             ans = true;
             break;
           }
       }
       // returns true if the letter was found and moves to the next letter
       if (ans === true || disappearingArr === []){
         return true;
       }
       // returns false
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
