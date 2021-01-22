// https://github.com/arifullah565360/javascript-basic/blob/main/assignment.js

//1. Kilometer to Meter Converter

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Invalid value."; //Throw an error message.
    }
    var meter = 1000 * kilometer;
    return meter;
 }

//  var result= kilometerToMeter(71);
//     console.log(result)




//2. Budget Calculator

function budgetCalculator(watch, mobile, laptop) {

    //if any of the parameter is less than 0 than it will show an error message
      if (watch < 0 || mobile < 0 || laptop < 0) { 
        return "Invalid value.";
      }
    //if no negative value found than it will calculate the total price  
      var watchPrice = 50 * watch;
      var mobilePrice = 100 * mobile;
      var laptopPrice = 500 * laptop ;
      var totalPrice = mobilePrice + watchPrice + laptopPrice ;
      return  totalPrice;
    }

// var result= budgetCalculator(2,5,1);
//   console.log(result)




//3. Hotel Cost Calculator

function hotelCost(day) {
    var totalCost = 0;

if (day < 1) {
    totalCost = "Nothing to pay.";
} 
else if (day <= 10) {
    totalCost = day * 100;
} 
else if (day <= 20){
    var firstPart = 10 * 100;
    var remainingPart = day - 10;
    var secondPart = remainingPart * 80;
    totalCost = firstPart + secondPart; 
} 
else{
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remainingPart = day - 20;
    var thirdPart = remainingPart * 50;
    totalCost = firstPart + secondPart + thirdPart;
}
return totalCost;
}

// var result2 = hotelCost(24);
// console.log(result2)




//4. Mega Friend Finder
function megaFriend(str) {
    var max = str[0].length;
    str.map(word => max = Math.max(max, word.length));
    largestWord = str.filter(word => word.length == max);
    return largestWord[0]; //If multiple values exist on maximum string than show the first name only.
  }
  
  // var result = megaFriend(['hafsa bint fayzul', 'hafsa bint fayzun', 'lima bint apollo','sara','fara']);
  // console.log(result)
  
