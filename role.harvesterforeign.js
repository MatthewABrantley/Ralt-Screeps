//Module to Export
module.exports = {
    run: function(creep) {
        var deposit1 = Game.getObjectById('57871830fb5c76907e32e5c3')
        console.log(deposit1);
        
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
        if (creep.memory.working == true) {
            if (creep.transfer(deposit1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(deposit1);
                }
            }   
        else {
            var source = Game.getObjectById('576a9bd757110ab231d880c6');
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
}



// var source = 
// creep.memory.sourceId = source.id;
