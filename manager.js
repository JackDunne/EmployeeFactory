const Random = require('./Random.js');

const Manager = function(){
let id = "w-"+Random().digit(8);
let workers = Random().discreteRangeIn(4,20);
let baseSalary = Random().discreteRangeIn(4,9)*10000;
function pay(){
    let dailyPay = (hours/5)*wage;
    let weeklyPay = hours*wage;
    let yearlyPay = baseSalary();
    let payArray = [dailyPay,weeklyPay,yearlyPay];
    if(workers <= 10){
        yearlyPay += workers*250;
    }
    else{
        yearlyPay += 2500 + (workers-10)*400;
    }
    return payArray;

    };
}

module.exports = Manager;
