const Worker = require('./worker.js');
const Contractor = require('./contractor.js');
const DivisionHead = require('./divisionHead.js');
const Manager = require('./manager.js');

const employeeFactory = function(type){
    function create(type){
        if(type == "Worker"){
            return new Worker();
        }
        else if(type == "Contractor"){
            return new Contractor();
        }
        else if(type == "DivisionHead"){
            return new DivisionHead();
        }
        else if(type == "Manager"){
            return new Manager();
        }
        else{
            console.log("please give a correct input");
        }
    }

};

module.exports = employeeFactory;
function main(){
    create(Worker);
    create(Manager);
    create(DivisionHead);
}
