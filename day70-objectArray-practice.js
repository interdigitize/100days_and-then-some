
// Given an array of deliveries, returns an object of rush orders with the id as the key and delivery fee as the value

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

var rushOrders = function(deliveries){
  return deliveries.filter(function(el){
    return el.rushDelivery === true;
  }).reduce(function(newObject, current){
    newObject[current.id] = current.rushDeliveryFee;
    return newObject;
  }, {});
}
console.log(rushOrders(deliveries));
