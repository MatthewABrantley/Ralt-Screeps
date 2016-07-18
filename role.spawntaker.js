//Import Modules

//Module to Export
module.exports = {
    run: function(creep) {
        
        var farFlag = Game.flag.Flag1;
        var homeFlag = Game.flag.Flag2;
        var pickupStorage = Game.getObjectById('57808dd70affe1b058f22b5c');
/////////////////////////////////////////////////////////////////// 
// Enabling more creep memory
///////////////////////////////////////////////////////////////////
        if(creep.memory.full == undefined) {
            creep.memory.full = false;
        }
        if(creep.memory.arrived == undefined) {
            creep.memory.arrived = false;
        }
///////////////////////////////////////////////////////////////////                
// I'm going to use this Creep as a template for expanding 
// decision making and expand the memory to a three switch system
// using:
//      full -> Controls Resource Pickup
//      arrived -> is in the correct room or not
//      working -> will conduct work with the resource if full and arrived
///////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////  
// State Cycling occurs here and ensures that the creep will always 
// have the correct variables set
/////////////////////////////////////////////////////////////////////  
        
        // check if full
        if (creep.memory.full == true && creep.carry.energy == 0) {
            creep.memory.full = false;
            }
            else 
                if (creep.memory.full == false && creep.carry.energy == creep.carryCapacity) {
                    creep.memory.full = true;
                }
        // check if full and arrived     
        if (creep.memory.full == true && creep.memory.arrived == true && CREEP IS NOT ARRIVED) {
            creep.memory.arrived = false;
            }
            else 
                if (creep.memory.arrived == false && CREEP HAS ARRIVED) {
                creep.memory.arrived = true;
                }
        // work cycle        
        if (creep.memory.working == true && creep.memory.full == false) {
            creep.memory.working = false;
        }
        if (creep.memory.working == true && creep.memory.arrived == false) {
            cree.memory.working = false;
        }
            else 
                if (creep.memory.working == false && Creep should work) {
            creep.memory.working = true;
            }
            
            
///////////////////////////////////////////////////////////////////
// This is where work gets done
///////////////////////////////////////////////////////////////////

        if (creep.memory.full == false) {
            if (creep.withdraw(pickupStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(pickupStorage);
            }
        }
        else 
            if (creep.memory.arrived == false) {
                
            
        
        
        if (creep.memory.working == true) {
            var thisFlag = Game.flags.Flag1
            creep.moveTo(thisFlag);
            if (creep.pos == thisFlag.pos)
                creep.memory.arrived = true;
                
            
            
            creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
           if (constructionSite != undefined) {
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite);
                }
            }
        }
        // ELSE Working == False, fill up from pickupStorage
        else {
            var pickupStorage = Game.getObjectById('57808dd70affe1b058f22b5c');
            if (creep.withdraw(pickupStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(pickupStorage);
            }    
        }
    }
};
