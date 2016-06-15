//Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.


function ArithGeo(arr) {

  var arithArrTest = arr.map(function(current, index){
    return arr[index+1] - current;
  }).filter(function(el){ return el > 0;});

  var geoArrTest = arr.reverse().map(function(current, index){
    return current/ arr[index+1];
  }).filter(function(el){ return el > 0;});

  function valueCheck(aTestArr){
    return aTestArr.reduce(function(previous, current, index){
      if(current === previous){
        return current;
      }
      return false;
    });
  }

  if (typeof valueCheck(arithArrTest) === "number" ){
    return "Arithmetic";
  }
  else if (typeof valueCheck(geoArrTest) === "number" ){
    return "Geometric";
  }
  else {
    return -1;
  }

}

console.log(ArithGeo([1,2,3,4]));
