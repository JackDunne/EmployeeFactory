const Random = require('./Random.js');

const Worker = function(){
    let id = "w-"+Random().digit(8);

};

module.exports = Worker;
