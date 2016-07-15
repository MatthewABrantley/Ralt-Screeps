module.exports = {
    run: function(creep) {
            if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            var depositStorage = Game.getObjectById('57808dd70affe1b058f22b5c')
            if (depositStorage != undefined) {
                if (creep.transfer(depositStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(depositStorage);
            }   
        }
        else {
            var source = Game.getObjectById('576a9bd757110ab231d880ca');
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }    
        }
    }
};



// var source = 
// creep.memory.sourceId = source.id;
