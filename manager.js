const thing = require('./thing.js');

const Manager = function(){
let id = "w-"+Random().digit(8);
let workers = Random().discreteRangeIn(4,20);
let baseSalary = Random().discreteRangeIn(4,9)*10000;
function pay(){
    let dailyPay = (hours/5)*wage;
    let weeklyPay = hours*wage;
    let yearlyPay = weeklyPay*52;
    let payArray = [dailyPay,weeklyPay,yearlyPay];
    if(workers <= 10){
        yearlyPay += workers*250;
    }
    else{
        for(let x = 0;x<10;)
    }
    return payArray;

};

module.exports = Manager;
