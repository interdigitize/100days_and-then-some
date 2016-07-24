//You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  var longest = strarr[0], longestIndex = 0; answer = "";
  strarr.forEach(function(el, index){
    if(el.length > longest.length){
      longest = el;
      longestIndex = index;
    }
  });
  for(longestIndex; longestIndex <= k; longestIndex++){
    answer += strarr[longestIndex];
  }
  return answer;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 4));

// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
