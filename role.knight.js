//Module to Export
module.exports = {
    run: function(creep) {
        if (creep.memory.working == true) {
            var kill = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            if (kill != undefined) {
                if (creep.attack(kill) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(kill);
                    }
                    else
                        if (kill == undefined) {
                            var killBase = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES);
                            if (creep.attack(killBase) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(killBase);
                            }
                            else
                                if (killBase == undefined) {
                                    creep.memory.working = false;
                                    }
                        }
            }
        }
// This is what happens if false, false is not directly referenced, it has a built in limit to two states unless I write another else if above for it
        if (creep.memory.working == false) {
                var attackFlag = Game.flags.Flag1;
                var exit = creep.pos.findClosestByRange(attackFlag);
                creep.moveTo(attackFlag);
                }
                else
                    if (creep.pos.isNearTo(attackFlag)) {
                        creep.memory.working = true;
                    }
    }
};
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
