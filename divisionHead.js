const Random = require('./Random.js');

const DivisionHead = function(){
let id = "d-"+Random().digit(8);
let managers = Random().discreteRangeIn(1,10);
let workers = Random().discreteRangeIn(20,300);
let baseSalary = Random().discreteRangeIn(2,5)*50000;
function pay(){
    let dailyPay = (hours/5)*wage;
    let weeklyPay = hours*wage;
    let yearlyPay = baseSalary();
    let payArray = [dailyPay,weeklyPay,yearlyPay];
    yearlyPay += managers*10000;
    yearlyPay += (workers*50)/(Math.log(50*workers));
    return payArray;

};

module.exports = DivisionHead;
