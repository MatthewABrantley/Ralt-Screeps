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
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }   
        }
        else {
            var pickupLink = Game.getObjectById('57871f20ece285d20d1f0d2b');
            if (creep.withdraw(pickupLink, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targetLink);
            }    
        }
    }
};
