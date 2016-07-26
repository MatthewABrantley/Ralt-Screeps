//Import Modules
require('prototype.spawn')();
require('prototype.kspawn')();
require('prototype.nwspawn')();
require('prototype.claimspawn')();
require('prototype.upfspawn')();
require('prototype.hspawn')();
require('prototype.h1cspawn')();
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleUpgraderB = require('role.upgraderB');
var roleBuilder = require('role.builder');
var roleBuilderB = require('role.builderB');
var roleRepairer = require('role.repairer');
var roleRepairerB = require('role.repairerB');
var roleWallRepairer = require('role.wallrepairer');
var roleWallRepairerB = require('role.wallrepairerB');
var roleHarvesterFar = require('role.harvesterfar');
var roleLinkSlave = require('role.linkslave');
var roleHarvesterClose = require('role.harvesterclose');
var roleBirthSlave = require('role.birthslave');
var roleBirthSlaveB = require('role.birthslaveB');
var roleKnight = require('role.knight');
var roleClaimer = require('role.claimer');
var roleUpgraderFar = require('role.upgraderfar');
var roleBaseExpand = require('role.baseexpand');
var roleHarvesterForeign = require ('role.harvesterforeign');
var roleHarvesterForeign2 = require ('role.harvesterforeign2');



module.exports.loop = function () {
    if (roleKnight == undefined) {
        console.log("Knight Error, role failed to be defined");
    }
        // Tower Code Begin
        var tower1 = Game.getObjectById('577c54de60a6481721b4c1ba');
            if(tower1) {
        //        var closestDamagedStructure1 = tower.pos.findClosestByRange(FIND_STRUCTURES, {
        //            filter: (structure) => structure.hits < 100000 && (structure).structureType === STRUCTURE_RAMPART
        //});
        //    if(closestDamagedStructure1) {
        //        tower.repair(closestDamagedStructure);
        //}
        var closestHostile1 = tower1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile1) {
                tower1.attack(closestHostile1);
                }
        }
        var tower2 = Game.getObjectById('578422af775afdc61face40f');
            if(tower2) {
        //        var closestDamagedStructure2 = tower.pos.findClosestByRange(FIND_STRUCTURES, {
        //            filter: (structure) => structure.hits < 10000 && (structure).structureType == STRUCTURE_RAMPART
        //});
        //if(closestDamagedStructure2) {
        //    tower.repair(closestDamagedStructure2);
        //}
        var closestHostile2 = tower2.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile2) {
                tower2.attack(closestHostile2);
                }
        }
        var towerB1 = Game.getObjectById('57963348c64f31c502242214');
            if(towerB1) {
                var closestDamagedStructureB1 = towerB1.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < 3000 && (structure).structureType === STRUCTURE_RAMPART
        });
            if(closestDamagedStructureB1) {
                towerB1.repair(closestDamagedStructureB1);
        }
        var closestHostileB1 = towerB1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostileB1) {
                towerB1.attack(closestHostileB1);
                }
        }
        var towerB2 = Game.getObjectById('57964ff761e7ffcf02fb3a5c');
            if(towerB2) {
                var closestDamagedStructureB2 = towerB2.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < 3000 && (structure).structureType === STRUCTURE_RAMPART
        });
            if(closestDamagedStructureB2) {
                towerB2.repair(closestDamagedStructureB2);
        }
        var closestHostileB2 = towerB2.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostileB2) {
                towerB2.attack(closestHostileB2);
                }
        }
    // Tower Code End
        
    // Link Code Begin
        // var sourceLinkEnergy = Game.OwnedStructure.STRUCTURE_LINK.
        var sourceLink = Game.getObjectById('57871830fb5c76907e32e5c3');
        var targetLink = Game.getObjectById('5791a7695665cc394cfcbc75');
        
            if(sourceLink) {
                sourceLink.transferEnergy(targetLink, [800]);
            if (targetLink == undefined) {
                console.log("Link Building to 800");
            }
        }
    // Link Code End
  
///////////////////////////////////////////////////////////////////////////////////////
//  I'm going to implement a global call on all functions. Someone suggested it  
//  online and it seems like a good idea with a global script like this. 
///////////////////////////////////////////////////////////////////////////////////////
  
  
    
    
    // clear memory
    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }
    //for every creep name in game.creeps
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];
        
        if (creep.memory.role === 'birthslaveB') {
            roleBirthSlaveB.run(creep);
        }
        if (creep.memory.role === 'upgraderB') {
            roleUpgraderB.run(creep);
        }
        if (creep.memory.role === 'builderB') {
            roleBuilderB.run(creep);
        }
        if (creep.memory.role === 'repairerB') {
            roleRepairerB.run(creep);
        }
        if (creep.memory.role === 'wallrepairerB') {
            roleWallRepairerB.run(creep);
        }
        //if creep is Claimer, call claimer script
        if (creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        //if creep is Knight, call knight script
        if (creep.memory.role == 'knight') {
            roleKnight.run(creep);
        }
        //if creep is linkslave, call linkslave script
        if (creep.memory.role == 'linkslave') {
            roleLinkSlave.run(creep);
        }
        //if creep is harvesterclose, call harvesterclose script
        if (creep.memory.role == 'harvesterclose') {
            roleHarvesterClose.run(creep);
        }
        //if creep is birthslave, call birthslave script
        if (creep.memory.role == 'birthslave') {
            roleBirthSlave.run(creep);
        }
        //if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        //if creep is harvesterfar, call harvesterfar script
        if (creep.memory.role == 'harvesterfar') {
            roleHarvesterFar.run(creep);
        }
        // if creep is upgrader, call upgrader script
            else 
                if (creep.memory.role == 'upgraderfar') {
                roleUpgraderFar.run(creep);
                }
        // if creep is upgrader, call upgrader script
                else 
                    if (creep.memory.role == 'upgrader') {
                    roleUpgrader.run(creep);
                    }
        // if creep is builder, call builder script
                    else 
                        if (creep.memory.role == 'builder') {
                        roleBuilder.run(creep);
                        }
        // if creep is repairer, call repairer script
                        else 
                            if (creep.memory.role == 'repairer') {
                            roleRepairer.run(creep);
                            }
        // if creep is wallrepairer, call repairer script
                            else 
                                if (creep.memory.role == 'wallrepairer') {
                                roleWallRepairer.run(creep);
                                }
                                else
                                    if (creep.memory.role == 'baseexpand') {
                                    roleBaseExpand.run(creep);
                                    }
        // if creep is harvesterforeign, call harvesterforeign script
                                    else 
                                        if (creep.memory.role == 'harvesterforeign') {
                                        roleHarvesterForeign.run(creep);
                                        }
                                        else 
                                            if (creep.memory.role == 'harvesterforeign2') {
                                            roleHarvesterForeign2.run(creep);
                                        }
    }
    
    //Writing things to memory
    var numberOfCreeps = _.sum(Game.creeps, (c) => c.memory.role != 'undefined');
    
    
    

    //Minimum numbers of screeps
    var minimumNumberOfHarvesters = 0;
    var minimumNumberOfHarvesterFars = 1;
    var minimumNumberOfHarvesterCloses = 1;
    var minimumNumberOfBirthSlaves = 1;
    var minimumNumberOfBirthSlavesB = 1;
    var minimumNumberOfLinkSlaves = 1;
    var minimumNumberOfUpgraders = 1;
    var minimumNumberOfUpgradersB = 1;
    var minimumNumberOfBuilders = 1;
    var minimumNumberOfBuildersB = 1;
    var minimumNumberOfRepairers = 1;
    var minimumNumberOfRepairersB = 1;
    var minimumNumberOfWallRepairers = 1;
    var minimumNumberOfWallRepairersB = 0;
    var minimumNumberOfKnights = 0;
    var minimumNumberOfClaimers = 1;
    var minimumNumberofUpgraderFars = 0;
    var minimumNumberofBaseExpanders = 0;
    var minimumNumberOfHarvesterForeigns = 1;
    var minimumNumberOfHarvesterForeigns2 = 1;
    
    //Max numbers Deprecated and Bad
    //var maximumNumberOfBuilders = 5;
    
    //Defines how many of each Screep there are
    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numberOfUpgradersB = _.sum(Game.creeps, (c) => c.memory.role == 'upgraderB');
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numberOfBuildersB = _.sum(Game.creeps, (c) => c.memory.role == 'builderB');
    var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
    var numberOfRepairersB = _.sum(Game.creeps, (c) => c.memory.role == 'repairerB');
    var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallrepairer');
    var numberOfWallRepairersB = _.sum(Game.creeps, (c) => c.memory.role == 'wallrepairerB');
    var numberOfHarvesterFars = _.sum(Game.creeps, (c) => c.memory.role == 'harvesterfar');
    var numberOfHarvesterCloses = _.sum(Game.creeps, (c) => c.memory.role == 'harvesterclose');
    var numberOfLinkSlaves = _.sum(Game.creeps, (c) => c.memory.role == 'linkslave');
    var numberOfBirthSlaves = _.sum(Game.creeps, (c) => c.memory.role == 'birthslave');
    var numberOfBirthSlavesB = _.sum(Game.creeps, (c) => c.memory.role == 'birthslaveB');
    var numberOfKnights = _.sum(Game.creeps, (c) => c.memory.role == 'knight');
    var numberOfClaimers = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
    var numberOfUpgraderFars = _.sum(Game.creeps, (c) => c.memory.role == 'upgraderfar');
    var numberOfBaseExpanders = _.sum(Game.creeps, (c) => c.memory.role == 'baseexpand');
    var numberOfHarvesterForeigns = _.sum(Game.creeps, (c) => c.memory.role == 'harvesterforeign');
    var numberOfHarvesterForeigns2 = _.sum(Game.creeps, (c) => c.memory.role == 'harvesterforeign2');
    ///////////////////////////////////////////////////////////////////////////////////////    
    // var energy wizardy that barely works
    // I need to be dividing my energy variables by something other than a static number, 
    // that's why this fails so easily. Although, I could also set up stages for different
    // RCL's(GCL's?) in my createCustomCreep prototypes.  
    ///////////////////////////////////////////////////////////////////////////////////////
    var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    var energyB = Game.spawns.Spawn2.room.energyCapacityAvailable;
    
    // Unit Spawning Logic
    var name = undefined;

    
    
    //First spawn a HarvesterClose if none exist to begin filling Storage
    if (numberOfHarvesterCloses < minimumNumberOfHarvesterCloses) {
        name = Game.spawns.Spawn1.createH1CCustomCreep(energy, 'harvesterclose');
            
            //If Not enough energy (Disaster Recovery) spawn a Harvester who will Harvest Anything
            //if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesterCloses == 0) {
            //    name = Game.spawns.Spawn1.createCustomCreep(
            //        Game.spawns.Spawn1.room.energyAvailable, 'harvester');
        //}
    }
    else
        if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesterCloses == 0) {
            name = Game.spawns.Spawn1.createCustomCreep(
            Game.spawns.Spawn1.room.energyAvailable, 'harvester');
        }
        //Spawn a BirthSlave if none exist
        else 
            if (numberOfBirthSlaves < minimumNumberOfBirthSlaves) {
                name = Game.spawns.Spawn1.createNWCustomCreep(energy, 'birthslave');
            }
            else 
                if (numberOfHarvesterFars < minimumNumberOfHarvesterFars) {
                    name = Game.spawns.Spawn1.createHCustomCreep(energy, 'harvesterfar');
                }
                else 
                    if (numberOfUpgraders < minimumNumberOfUpgraders) {
                        name = Game.spawns.Spawn1.createUpgradeCustomCreep(energy, 'upgrader');
                    }
                    else
                        if (numberOfUpgraderFars < minimumNumberofUpgraderFars) {
                            name = Game.spawns.Spawn1.createUpgradeCustomCreep(energy, 'upgraderfar');
                        }
                        else 
                            if (numberOfLinkSlaves < minimumNumberOfLinkSlaves) {
                            name = Game.spawns.Spawn1.createNWCustomCreep(energy, 'linkslave');
                            }
                            else 
                                if (numberOfHarvesterForeigns < minimumNumberOfHarvesterForeigns) {
                                name = Game.spawns.Spawn1.createUpgradeCustomCreep(energy, 'harvesterforeign');
                                }
                                else 
                                    if (numberOfRepairers < minimumNumberOfRepairers) {
                                    name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer');
                                    }
                                    else
                                        if (numberOfBaseExpanders < minimumNumberofBaseExpanders) {
                                        name = Game.spawns.Spawn1.createUpgradeCustomCreep(energy, 'baseexpand');
                                        }
                                        else 
                                            if (numberOfWallRepairers < minimumNumberOfWallRepairers) {
                                            name = Game.spawns.Spawn1.createCustomCreep(energy, 'wallrepairer');
                                            }
                                            else 
                                                if (numberOfBuilders < minimumNumberOfBuilders) {
                                                name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder');
                                                }
                                                else 
                                                    if (numberOfKnights < minimumNumberOfKnights) {
                                                    name = Game.spawns.Spawn1.createCustomKCreep(energy, 'knight');
                                                    console.log("If this is undefined, the spawner is paused | Spawned new creep: " + name);
                                                    }
                                                    else
                                                        if (numberOfHarvesterForeigns2 < minimumNumberOfHarvesterForeigns2) {
                                                        name = Game.spawns.Spawn1.createUpgradeCustomCreep(energy, 'harvesterforeign2');
                                                        }
                                                        else
                                                            if (numberOfClaimers == 0) {
                                                            name = Game.spawns.Spawn1.createClaimCustomCreep(energy, 'claimer');
                                                            }
                                                            else 
                                                                if (numberOfClaimers >= 1) {
                                                                console.log("If this is undefined, the spawner is paused | Spawned new creep: " + name);
                                                                }
                                                                else
                                                                console.log("If this is undefined, the spawner is paused | Spawned new creep: " + name);
    if (numberOfBirthSlavesB < minimumNumberOfBirthSlavesB) {
        name = Game.spawns.Spawn2.createNWCustomCreep(energyB, 'birthslaveB');
    }
    else
        if (numberOfUpgradersB < minimumNumberOfUpgradersB) {
            name = Game.spawns.Spawn2.createUpgradeCustomCreep(energyB, 'upgraderB');
        }
        else
            if (numberOfRepairersB < minimumNumberOfRepairersB) {
                name = Game.spawns.Spawn2.createUpgradeCustomCreep(energyB, 'repairerB');
            }
            else
                if (numberOfBuildersB < minimumNumberOfBuildersB) {
                    name = Game.spawns.Spawn2.createUpgradeCustomCreep(energyB, 'builderB');
                }
                else
                    if (numberOfWallRepairersB < minimumNumberOfWallRepairersB) {
                        name = Game.spawns.Spawn2.createUpgradeCustomCreep(energyB, 'wallrepairerB');
                    }
    //else
    //    if
    console.log("If this is undefined, the spawnerB is paused | Spawned new creepB: " + name);
    
    
    
    //if (!(name < 0)) {
    //    console.log("If this is undefined, the system is holding a spawn | Spawned new creep: " + name );
    //}
};
