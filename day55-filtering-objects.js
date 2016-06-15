var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];

var dataFilter = data.filter(function(element){
  if(element.name != undefined && element.age != undefined){
    return true;
  }
  return false;
});

console.log(dataFilter);
