//Module to Export
module.exports = {
    run: function(creep) {
        if (creep.memory.working == false && creep.room != 'W33S39') {
            var route = Game.map.findRoute(creep.room, anotherRoomName);
            if(route.length > 0) {
            console.log('Now heading to room '+route[0].room);
            var exit = creep.pos.findClosestByRange(route[0].exit);
            creep.moveTo(exit);
            }
        }
        
            



                    //else 
                     //   if (creep.memory.working == false) {
                      //      creep.memory.working = true;
                    //        }
// if creep.memory.working == true find enemy units and attack
        if (creep.memory.working == true) {
            var takeControl = creep.pos.findClosestByPath(FIND_STRUCTURES);
            if (takeControl != undefined) {
                if(creep.claimController(takeControl) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(takeControl);
                }
            }
        }
    }
}
// This is what happens if false, false is not directly referenced, it has a built in limit to two states unless I write another else if above for it
 

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
