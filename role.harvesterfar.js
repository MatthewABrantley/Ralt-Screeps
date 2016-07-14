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
              filter: (s) => (s.structureType == STRUCTURE_LINK
                            || s.structureType == STRUCTURE_CONTAINER
                            || s.structureType == STRUCTURE_TOWER
                            || s.structureType == STRUCTURE_SPAWN
                            || s.structureType == STRUCTURE_EXTENSION
                            && s.energy < s.energyCapacity 
            );
            if (structure != undefined) {
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }   
        }
        else {
            var source = Game.getObjectById('576a9bd757110ab231d880c8');
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }    
        }
    }
};



// var source = 
// creep.memory.sourceId = source.id;
