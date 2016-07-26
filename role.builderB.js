//Import Modules
var roleUpgraderB = require('role.upgraderB');

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
            var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
           if (constructionSite != undefined) {
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite);
                }
            }
            else {
                roleUpgraderB.run(creep);
            }
        }
        // ELSE Working == False, fill up from pickupStorage
        else {
            var pickupStorageB = Game.getObjectById('5796050ee55830547916cea1');
            if (creep.withdraw(pickupStorageB, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(pickupStorageB);
            }    
        }
    }
};
