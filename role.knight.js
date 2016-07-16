//Module to Export
module.exports = {
    run: function(creep) {
        // Define working to == IS IN ENEMY ROOM, maybe implement a WAITING stage to wait for a healer to link up with him
            if (creep.memory.working == true && creep.room != W32S38) {
                creep.memory.working = false;
                }
                else 
                    if (creep.memory.working == false && creep.room == W32S38) {
                        creep.memory.working = true;
                        }
// if creep.memory.working == true find enemy units and attack
        if (creep.memory.working == true) {
            var kill = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            if (kill != undefined) {
                if (creep.attack(kill) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(kill);
                }
            }   
        }
        // This is what happens if false, false is not directly referenced, it has a built in limit to two states unless I write another else if above for it
        else {
            var targets = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            if (targets.length > 0 && Game.cpu.tickLimit - Game.cpu.getUsed() > 40) {
                creep.moveTo(new RoomPosition(5, 38, 'W32S37'));
            //if (creep.withdraw(pickupStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            //    creep.moveTo(pickupStorage);
            }    
        }
    }
};


//creep.moveTo(new RoomPosition(25, 20, 'W10N5'));
