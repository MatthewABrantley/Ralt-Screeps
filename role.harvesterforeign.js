//Module to Export
module.exports = {
    run: function(creep) {
        //var deposit1 = Game.getObjectById('57871830fb5c76907e32e5c3');
        var sourceB = Game.getObjectById('576a9bd757110ab231d880c6');
        var depositB = Game.getObjectById('5796050ee55830547916cea1')
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }
        if (creep.memory.working === true) {
            if (creep.transfer(depositB, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(depositB);
                }
        }
            else {
                if (creep.harvest(sourceB) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sourceB);
                    }
                }
        }
}




// var source = 
// creep.memory.sourceId = source.id;
