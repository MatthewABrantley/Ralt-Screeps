//Module to Export
module.exports = {
    run: function(creep) {
// Define working to == IS IN ENEMY ROOM, maybe implement a WAITING stage to wait for a healer to link up with him
        if (creep.memory.working == false && creep.room != W32S37) {
            var exitDir = Game.map.findExit(creep.room, W23S37);
            var exit = creep.pos.findClosestByRange(exitDir);
            creep.moveTo(exit);
            }
            else
                if (creep.memory.working == false && creep.room == W32S37) {
                    creep.memory.working == true;
                    }
                    else 
                        if (creep.memory.working == false) {
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
        else
            var kill = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            if(kill) {
                if(creep.attack(kill) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(kill);
            }    
        }
    }
}
//
//if(creep.room != anotherRoomName) {
//    var exitDir = Game.map.findExit(creep.room, anotherRoomName);
//    var exit = creep.pos.findClosestByRange(exitDir);
//    creep.moveTo(exit);
//}
//else {
//    // go to some place in another room
//}
//creep.moveTo(new RoomPosition(25, 20, 'W10N5'));
