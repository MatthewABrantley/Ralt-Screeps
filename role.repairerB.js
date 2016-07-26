//Import Modules
var roleBuilder = require('role.builderB');

//Modules to Export
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
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL
            //                                      || s.structureType === STRUCTURE_ROAD
            });  
            if (structure != undefined) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
            else {
                roleBuilderB.run(creep);
            }
        }
        // ELSE Working == False, fill up from pickupStorage
        else {
            var pickupStorage = Game.getObjectById('5796050ee55830547916cea1');
            if (creep.withdraw(pickupStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(pickupStorage);
            }    
        }
    }
};
