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
            (creep.transfer(sourceLink) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sourceLink);
                }
            }   
        }
        else {
            var source = Game.getObjectById('576a9bd757110ab231d880c6');
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }    
        }
    }
};



// var source = 
// creep.memory.sourceId = source.id;
