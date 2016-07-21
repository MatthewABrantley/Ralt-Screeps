//Module to Export
module.exports = {
    // Running the (creep) function, look to adapt this to towers and get them out of main.js
    //////////////////////////////////////////////////////////////
    //  Expanded variables for creep type
    //////////////////////////////////////////////////////////////
    //var baseFar = Game.getObjectById('576a9bd757110ab231d880c5');
    
    run: function(creep) {
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            var basespawn2 = Game.getObjectById('579093f07d880b5773e94c9c');
            if (creep.build(basespawn2) == ERR_NOT_IN_RANGE) {
            //if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(basespawn2);
            }   
        }
        // ELSE Working == False, fill up from pickupStorage
        else {
            var pickupStorage = Game.getObjectById('57808dd70affe1b058f22b5c');
            if (creep.withdraw(pickupStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(pickupStorage);
            }    
        }
    }
};
