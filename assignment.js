
// Kilometer to Meter function
function kilometerToMeter(distance) {
  if(distance < 0) // Negetive value check
    return 'distance can not be negative';
  var meter = distance * 1000; //convert kilometer to meter calculation
  return meter;
}

// Budget Calculator function
function budgetCalculator(watchQuantity = 0, 
                          phoneQuantity = 0, 
                          laptopQuantity = 0) { // set default value
  if(watchQuantity < 0) // watch quantity negative value check
    return 'watch quantity value can not be negative';
  if(phoneQuantity < 0) // phone quantity negative value check
    return 'phone quantity value can not be negative';
  if(laptopQuantity < 0) // laptop quantity negative value check
    return 'laptop quantity value can not be negative';
  var watchPrice = 50, 
      phonePrice = 100, 
      laptopPrice = 500; // declare all price variable
    function priceCal(price, quantity) { // multiply calculation function
      return price * quantity;
    }
  var budgetTotal = priceCal(watchPrice, watchQuantity) 
                  + priceCal(phonePrice, phoneQuantity) 
                  + priceCal(laptopPrice, laptopQuantity); // budget total calculation
  return budgetTotal;
}

// Hotel Cost function
function hotelCost(dayCount) {
  if(dayCount < 0) return 'Day value can not be negative'; // check negative for negative input
  var dayPrice = 100, // declare variables
      dayPrice80 = 80,
      dayPrice50 = 50,
      isDay10 = 10,
      isDay20 = 20,
      totalCost;
      function priceCal(day, price) { // multiply calculation function
        return  price * day;
      }
      if(dayCount <= isDay10) { // if day is within 10 days
        return priceCal(isDay10, dayPrice); // price calculation for days within 10
      } else if (dayCount > isDay10 && dayCount <= isDay20) { // if days within 20
        isDay20 = dayCount - isDay10;
        return totalCost = priceCal(isDay10, dayPrice) 
                         + priceCal(isDay20, dayPrice80); // price calculation for days within 20
      } else { // if day is upto 20
        var isDayUp20 = dayCount - isDay20;
        return totalCost = priceCal(isDay10, dayPrice) 
                         + priceCal(isDay10, dayPrice80) 
                         + priceCal(isDayUp20, dayPrice50); // price calculation for days upto 20
      }
}

// Mega Friend Function
function megaFriend(arr) {
  if(arr.length == 0) return 'friend list can not be empty'; // check empty array
  var arrLength = arr.length, // declare all variable
      nameLength = 0,
      largeName; 
  for(var i = 0; i < arrLength; i++) {
    if(nameLength < arr[i].length) { // check large length name string
      nameLength = arr[i].length;
      largeName = arr[i]; // set large name
    }
  }
  return largeName;
}