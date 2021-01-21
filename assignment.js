// convert kelometer to meter

function kilometerToMeter(meter){
  var meter = oneMeter * meter;
  return meter;
}
var oneMeter = 1000;
var result = kilometerToMeter(7);
console.log(result);

// 2nd question budget of calculator
function budgetCalculator(watch,phone,laptop) {
    const priceOfWatch = watch * 50;   //price for watch 
    const priceOfPhone = phone * 100;    //price for phone
    const PriceOfLaptop = laptop * 500;  //price for laptop
    const totalBudget = priceOfWatch + priceOfPhone + PriceOfLaptop;
    return totalBudget;
}
var output = budgetCalculator (50, 100, 500); //total output

console.log(output);


// 3rd question about Hotel Cost
function hotelCost(totalDay){
    var living = 0;
    if(totalDay<=10){
        var firstTenDays = totalDay*100;
    }
    else if(totalDay<=20){
        var firstTenDays = 10*100;
        var remainingDays = totalDay - 10; // for others extra 7 days
        var secondTenDays = remainingDays*80;
        var living = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remainingDays = totalDay - 20;
        var otherDays = remainingDays*50;
        var living = firstTenDays + secondTenDays + otherDays;
    }
    return living;

}
var totalResult = hotelCost(17);
console.log(totalResult);

