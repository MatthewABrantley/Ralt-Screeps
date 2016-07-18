//Module to Export
module.exports = {
    run: function(creep) {
        var thisFlag = Game.flags.Flag1;
        if (creep.memory.working == false && creep.room != 'room W33S36') {
            creep.moveTo(thisFlag);
            }
            else
                if(creep.pos.isEqualTo(thisFlag)) {
                    creep.memory.working = true;
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
