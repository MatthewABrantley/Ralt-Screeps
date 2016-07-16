//Module to Export
module.exports = {
    run: function(creep) {
            if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
              filter: (s) => (s.structureType == STRUCTURE_SPAWN
                            || s.structureType == STRUCTURE_EXTENSION
                            || s.structureType == STRUCTURE_TOWER
                            || s.structureType == STRUCTURE_CONTAINER)
                            && s.energy < s.energyCapacity 
            });
            if (structure != undefined) {
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }   
        }
        else {
            var pickupStorage = Game.getObjectById('57808dd70affe1b058f22b5c');
            if (creep.withdraw(pickupStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(pickupStorage);
            }    
        }
    }
};


