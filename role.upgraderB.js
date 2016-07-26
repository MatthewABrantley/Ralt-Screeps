//Module to Export
module.exports = {
    // Running the (creep) function, look to adapt this to towers and get them out of main.js
    run: function(creep) {
            if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            //if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
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
