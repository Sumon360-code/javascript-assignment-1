// convert kelometer to meter

function kilometerToMeter(meter){
  var meter = oneMeter * meter;
  return meter;
}
var oneMeter = 1000;
var result = kilometerToMeter(7);


// 2nd question budget of calculator
function budgetCalculator(watch,phone,laptop) {
    const priceOfWatch = watch * 50;   //price for watch 
    const priceOfPhone = phone * 100;    //price for phone
    const PriceOfLaptop = laptop * 500;  //price for laptop
    const totalBudget = priceOfWatch + priceOfPhone + PriceOfLaptop;
    return totalBudget;
}
var output = budgetCalculator (50, 100, 500); //total output

// 3rd question about Hotel Cost
function hotelCost(totalDay){
    var totalLivingDays = 0;
    if(totalDay<=10){
        var firstTenDays = totalDay*100;
    }
    else if(totalDay<=20){
        var firstTenDays = 10*100;
        var remainingDays = totalDay - 10; // for others extra 7 days
        var secondTenDays = remainingDays*80;
        var totalLivingDays = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remainingDays = totalDay - 20;
        var otherDays = remainingDays*50;
        var totalLivingDays = firstTenDays + secondTenDays + otherDays;
    }
    return totalLivingDays;

}
var totalResult = hotelCost(17);

// 4th question return the largest name of an array

function megaFriend(friendName){
    var largest = friendName[0];
    for (i = 0; i < friendName.length; i++){
        var hisName = friendName[i];
        if (hisName.length > largest.length){
            largest = hisName;
        }
    }
    return largest;
}
var largestNameOfArray =megaFriend( ['Ahmed', 'Sumon', 'Rahat Siddiq', 'Tanjid', 'Kawser']);