//Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function DashInsert(str) {
  var strArray = str.split("");
  return strArray.map(function(el, index){
    if(index === (parseInt(strArray.length-1))){
      return el;
    }
    if (parseInt(el) % 2 !== 0 && parseInt(strArray[index+1]) % 2 !== 0){
      return el + "-";
    }
    return el;
  }).join("");

}

console.log(DashInsert("56730"));

// Input:99946
// Output:9-9-946
//
// Input:56730
// Output:567-30
