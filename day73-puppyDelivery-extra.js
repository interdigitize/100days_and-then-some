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

var orderDate = function(anArray){
  return anArray.map(function(object){
    return {id: object.id, orderDate: object.orderDate};
  });
  // need to sort by dates...
}

var reformatDates = function(anArray){
  return anArray.map(function (object){
    return object.orderDate;
  });
  // if it contains slashes (regex test) then reformat
  // if April is first, reformat
  //sort by the first num up to the first space
}


  var totalOrderPrice = function(anArray){
    return anArray.map(function(object){
      return object.orderPrice;
    }).reduce(function(pre, cur){
      return pre + cur;
    });
}

var deliveryLocations = function(deliveries){
  deliveries.reduce(function(deliveryObject, current){
    if(deliveryObject[current.destination] === undefined){
        deliveryObject[current.destination] = 1;
      }
    else{
      deliveryObject[current.destination] +=1;
    }
    return deliveryObject;
  }, {})
}

console.log(reformatDates(deliveries));
