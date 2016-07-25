//Module to Export
module.exports = {
    run: function(creep) {
        var deposit2 = Game.getObjectById('5796050ee55830547916cea1')
        console.log(deposit2);
        
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
        if (creep.memory.working == true) {
            if (creep.transfer(deposit2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(deposit2);
                }
            }   
        else {
            var source = Game.getObjectById('576a9bcd57110ab231d87fc4');
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
}