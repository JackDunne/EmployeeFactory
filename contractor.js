const Random = require('./Random.js');

const Contrator = function(){
let id = "c-"+Random().digit(8);
let startDate = Random().digit(4)+"/"+Random().digit(2)+"/"+Random.digit(2);
let endDate =  Random().digit(4)+"/"+Random().digit(2)+"/"+Random.digit(2);
function pay(){
    return Random().discreteRangeIn(500,9000);
}
}
module.exports = Contrator;
