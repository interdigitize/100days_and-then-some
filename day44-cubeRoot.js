//STILL WORKING ON THIS...
function cutCube(volume,n){
  var x=Math.cbrt(volume)
  console.log(x);
  if (Math.cbrt(volume/n)%1===0 && (x%n===0 || n%x===0)){
    return true;
  }
  return false;
}
console.log(cutCube(3375,125));
