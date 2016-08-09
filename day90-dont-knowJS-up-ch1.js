// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// Finally, check the amount against your bank account balance to see if you can afford it or not.
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

const taxRate = 0.09;
const phonePrice = 380.98;
const accessoryPrice = 59.60;
const spendingThreshold = 500;
// var bankBalance = prompt("How much money do you have to spend in the bank?");
var bankBalance = 5000;

while(bankBalance > 0){ //infinite...ug
  var price = phonePrice + accessoryPrice;
  console.log(formatPrice(calculateTax(price)));
  formatPrice(calculateTax(price));
  if(calculateTax(price) > bankBalance){
    console.log("Sorry, you are low on funds and can not purchase the items. If you are a spoiled child, call home. If you live in the realy world, keep saving.")
  }
  else{
    bankBalance -= calculateTax(price);
  }

}

function calculateTax(price){
  return price + (price * taxRate);
}

function formatPrice(price){
  return console.log("The cost of you phone purchase is: "+ "$" + Math.round(price * 100));
}
