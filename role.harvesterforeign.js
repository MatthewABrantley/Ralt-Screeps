//Module to Export
module.exports = {
    run: function(creep) {
        //var deposit1 = Game.getObjectById('57871830fb5c76907e32e5c3');
        var source = Game.getObjectById('576a9bd757110ab231d880c6');
        //console.log(depositLinkA);
        var depositStorageB = Game.getObjectById('5796050ee55830547916cea1')
        console.log(depositStorageB);
        
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else 
            if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
                creep.memory.working = true;
            }
        //////////////////////////////////////////////////////////////////////////////////////
        // 
        //             Reuse this code to build in foreign rooms
        // 
        //////////////////////////////////////////////////////////////////////////////////////
        //if (creep.memory.working == true) {
        //    var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        //   if (constructionSite != undefined) {
        //        if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
        //            creep.moveTo(constructionSite);
        //        }
        //    }
        //    else
        //        if (constructionSite == undefined) {
        if (creep.transfer(depositStorageB, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(depositStorageB);
            }
            else
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
            }
    }
}



// var source = 
// creep.memory.sourceId = source.id;
