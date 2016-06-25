//Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {

  var hours = 9;
  var pmCheck = ((/(pm)/).test(str)|| hours < 12) ? (hours = hours+12) : (hours = hours-12);
  // var pmCheck = str.test()
  console.log(hours + "\n" + pmCheck);

  var firstTime = str.match(/.+?(?=\-)/);
  var secondTime = str.match(/(?=\-).+$/);

console.log(firstTime + "\n" + secondTime);
  var minutes = str.match(/:(\d+)/);
  var AMPM = str.match(/\-(.*)$/);
  if(AMPM == "PM" && hours<12) hours = hours+12;
  if(AMPM == "AM" && hours==12) ;
  return AMPM;

}

console.log(CountingMinutesI("2:40pm-3:20pm"));

// Input:"12:30pm-12:00am"
// Output:690
//
// Input:"1:23am-1:08am"
// Output:1425
