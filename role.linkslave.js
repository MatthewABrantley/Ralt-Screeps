//TO DO: Implement Tower Bros role and have linkslaves load up towers if they need any from linkStorage
// This will allow us to stockpile in peace time, and drain RESOURCE_ENERGY into defense when not
// Perhaps even better would be a "scavenge" memory state where if the slave cannot pull from Link, go pick up loose energy anywhere

// Modules to import
var roleBirthSlave = require('role.birthslave');
// Module to Export
module.exports = {
    run: function(creep) {
            if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            var linkStorage = Game.getObjectById('57808dd70affe1b058f22b5c');
            if (linkStorage != undefined) {
                if (creep.transfer(linkStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(linkStorage);
                }
            }   
        }
        else {
            var pickupLink = Game.getObjectById('5791a7695665cc394cfcbc75');
            if (creep.withdraw(pickupLink, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(pickupLink);
            }
            //else
            //    if(numberOfBirthSlaves === 0) {
            //    roleBirthSlave.run(creep);
            //}
        }
    }
};
