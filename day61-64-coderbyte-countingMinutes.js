//Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {

  var firstTime = str.replace(/(?=\-).+$/, "");
  var secondTime = str.replace(/.+\-/, "");
  var minDif = parseInt(secondTime.replace(/(\d+):/, "")) - parseInt(firstTime.replace(/(\d+):/, ""));
  var firstHours = parseInt(firstTime.replace(/:(\w+)/, ""));
  var secondHours = parseInt(secondTime.replace(/:(\w+)/, ""));
  function pmCheck(aStr, hours){
     return ((/(pm)/).test(aStr)) ? (hours = hours+12) : (hours = hours);
  }
  firstHours = pmCheck(firstTime, firstHours);
  secondHours = pmCheck(secondTime, secondHours);


  if((/(pm)/).test(firstTime) === true && (/(pm)/).test(secondTime) === false){
    return minDif + (((24-firstHours) + secondHours) * 60);
  }
  else if(firstHours === secondHours && Math.sign(minDif) === -1 && (/(pm)/).test(firstTime) === true && (/(pm)/).test(secondTime) === true || (/(am)/).test(firstTime) === true && (/(am)/).test(secondTime) === true){
    return minDif + (24 * 60);
  }
  else{
    return minDif + ((secondHours - firstHours) * 60);
  }
}

console.log(CountingMinutesI("1:00pm-11:00am"));

// Input:"12:30pm-12:00am"
// Output:690
//
// Input:"1:23am-1:08am"
// Output:1425
