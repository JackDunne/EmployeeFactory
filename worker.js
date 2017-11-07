const Random = require('./Random.js');

const Worker = function(){
    let id = "w-"+Random().digit(8);
    let wage = Random().discreteRangeIn(8,50);
    let hours = Random().discreteRangeIn(4,7)*5;
    function pay(){
        let dailyPay = (hours/5)*wage;
        let weeklyPay = hours*wage;
        let yearlyPay = weeklyPay*52;
        let payArray = [dailyPay,weeklyPay,yearlyPay];
        return payArray;

    }

};

module.exports = Worker;
