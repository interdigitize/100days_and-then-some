
// Given an array of deliveries, return an object that contains a key for each destination we deliver to. The value of each key should be how many deliveries we will be making to that destination

var deliveries = [
  {
    "id": 1,
    "destination": 'Oakland',
    "orderPrice": 75,
    "rushDelivery": true,
    "rushDeliveryFee": 12.75,
    "orderDate": "4 April 2016"
  },
  {
    "id": 2,
    "destination": 'San Jose',
    "orderPrice": 62.75,
    "orderDate": "5 April 2016"
  },
  {
    "id": 3,
    "destination": 'San Francisco',
    "orderPrice": 15.00,
    "rushDelivery": true,
    "rushDeliveryFee": 50.75,
    "orderDate": "10 April 2016"
  },
  {
    "id": 4,
    "destination": 'San Francisco',
    "orderPrice": 25,
    "orderDate": "4/11/2016"
  },
  {
    "id": 5,
    "destination": 'San Francisco',
    "orderPrice": 90,
    "rushDelivery": true,
    "rushDeliveryFee": 30,
    "orderDate": "April 12, 2015"
  },
  {
    "id": 6,
    "destination": 'Berkeley',
    "orderPrice": 45,
    "orderDate": "4/01/2015"
  },
  {
    "id": 7,
    "destination": 'Berkeley',
    "orderPrice": 62.16,
    "orderDate": "12 April 2016"
  }
];

//forLoop
//
// var countPuppiesByLocation = function(deliveries){
//   var theLocationObject = {};
//   for (var i = 0; i < deliveries.length; i++){
//     if (theLocationObject[deliveries[i].destination] === undefined){
//       theLocationObject[deliveries[i].destination] = 1;
//     }
//     else{
//       theLocationObject[deliveries[i].destination] += 1;
//     }
//   }
//   return theLocationObject;
// }

var countPuppiesByLocation = function(deliveries){
  return deliveries.reduce(function(theLocationObject, current){
    if(theLocationObject[current.destination] === undefined){
      theLocationObject[current.destination] = 1;
    }
    else{
      theLocationObject[current.destination] += 1;
    }
    return theLocationObject;
  }, {});
}
console.log(countPuppiesByLocation(deliveries));
