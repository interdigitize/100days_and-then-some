
function countBy(count_by, count_up_to){
  var sum = 0;
  while((sum + count_by) < count_up_to){
    sum += count_by;
  }
  return sum;
}
console.log(countBy(3, 50));
