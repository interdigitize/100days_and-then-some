/*
  Create a function that takes in the length of a side of cube and returns an array of the cube's surface area and volume.


Input: 3
Output: [54, 27]

Input: 4
Output: [96, 64]

Input: 0
Output: "Length must be greater than 0"

Input: -1
Output: "Length must be greater than 0"
*/

function cubeSAV (len) {
  if(typeof len !== "number"){
     console.log("Length must be greater than 0");

  }
  else if(len <= 0){
    console.log("Length must be greater than 0");

  }
  else{
    return [surfaceArea(len), volume(len)];
  }
}

function surfaceArea(len){
  return Math.pow(len, 2)*6;
}

function volume (len){
  return Math.pow(len, 3);
}

var cubePropArray = cubeSAV(3);

console.log(cubePropArray);
