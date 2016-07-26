//Module to Export
module.exports = {
    run: function(creep) {
        if (creep.memory.working === true) {
            var takeControl = Game.getObjectById('576a9bcd57110ab231d87fc3');
            console.log(creep.reserveController(takeControl));
            if (takeControl != undefined) {
                if (creep.reserveController(takeControl) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(takeControl);
                    }
                    else
                        if (takeControl === undefined) {
                            creep.memory.working = false;
                           }
                }
        }
        
// This is what happens if false, false is not directly referenced, it has a built in limit to two states unless I write another else if above for it
        if (creep.memory.working === false) {
                var nextRhoom = Game.flags.nextRoom;
                var exit = creep.pos.findClosestByRange(nextRhoom);
                creep.moveTo(nextRhoom);
                }
        if (creep.pos.isNearTo(nextRhoom)) {
            creep.memory.working = true;
        }
    }
}