//Import Modules
require('prototype.spawn')();
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallrepairer');
var roleHarvesterFar = require('role.harvesterfar');
var roleLinkSlave = require('role.linkslave');
var roleHarvesterClose = require('role.harvesterclose');
var roleBirthSlave = require('role.birthslave');

module.exports.loop = function () {
    // Tower Code Begin
        var tower = Game.getObjectById('577c54de60a6481721b4c1ba');
            if(tower) {
                var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < 100000 && (structure).structureType == STRUCTURE_RAMPART
        });
            if(closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
        }
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                tower.attack(closestHostile);
                }
        }
        var tower2 = Game.getObjectById('577c54de60a6481721b4c1ba');
            if(tower2) {
                var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < 100000 && (structure).structureType == STRUCTURE_RAMPART
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                tower.attack(closestHostile);
                }
        }
    // Tower Code End
        
    // Link Code Begin
        // var sourceLinkEnergy = Game.OwnedStructure.STRUCTURE_LINK.
        var sourceLink = Game.getObjectById('57871830fb5c76907e32e5c3');
        var targetLink = Game.getObjectById('57871f20ece285d20d1f0d2b');
        
            if(sourceLink) {
                sourceLink.transferEnergy(targetLink, [800]);
            if (targetLink == undefined) {
                console.log("Link Building to 800");
            }
        }
    // Link Code End
            
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
        
        //if creep is linkslave, call linkslave script
        if (creep.memory.role == 'linkslave') {
            roleLinkSlave.run(creep);
            }
        //if creep is harvesterclose, call harvesterclose script
        if (creep.memory.role == 'harvesterclose') {
            roleHarvesterClose.run(creep);
            }
        //if creep is harvesterclose, call harvesterclose script
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
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            }
        // if creep is builder, call builder script
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            }
        // if creep is repairer, call repairer script
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
            }
                // if creep is wallrepairer, call repairer script
        else if (creep.memory.role == 'wallrepairer') {
            roleWallRepairer.run(creep);
            }
    }
    
    //Writing things to memory
    var numberOfCreeps = _.sum(Game.creeps, (c) => c.memory.role != 'undefined');

    //Minimum numbers of screeps
    var minimumNumberOfHarvesters = 0;
    var minimumNumberOfHarvesterFars = 1;
    var minimumNumberOfHarvesterCloses = 1;
    var minimumNumberOfBirthSlaves = 1;
    var minimumNumberOfLinkSlaves = 1;
    var minimumNumberOfUpgraders = 1;
    var minimumNumberOfBuilders = 1;
    var minimumNumberOfRepairers = 2;
    var minimumNumberOfWallRepairers = 1;
    
    //Max numbers Deprecated and Bad
    //var maximumNumberOfBuilders = 5;
    
    //Defines how many of each Screep there are
    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
    var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallrepairer');
    var numberOfHarvesterFars = _.sum(Game.creeps, (c) => c.memory.role == 'harvesterfar');
    var numberOfHarvesterCloses = _.sum(Game.creeps, (c) => c.memory.role == 'harvesterclose');
    var numberOfLinkSlaves = _.sum(Game.creeps, (c) => c.memory.role == 'linkslave');
    var numberOfBirthSlaves = _.sum(Game.creeps, (c) => c.memory.role == 'birthslave');
    
    //var energy wizardy that barely works
    var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    
    // Unit Spawning Logic
    var name = undefined;
    
    //First spawn a HarvesterClose if none exist to begin filling Storage
    if (numberOfHarvesterCloses < minimumNumberOfHarvesterCloses) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvesterclose');
            
            //If Not enough energy (Disaster Recovery) spawn a Harvester who will Harvest Anything
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters == 0) {
                name = Game.spawns.Spawn1.createCustomCreep(
                    Game.spawns.Spawn1.room.energyAvailable, 'harvester');
        }
    }
    
    //Spawn a BirthSlave if none exist
    else if (numberOfBirthSlaves < minimumNumberOfBirthSlaves) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'birthslave');
        }
            else 
                if (numberOfHarvesterFars < minimumNumberOfHarvesterFars) {
                name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvesterfar');
                }
                else 
                    if (numberOfUpgraders < minimumNumberOfUpgraders) {
                    name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader');
                    }
                    else 
                        if (numberOfLinkSlaves < minimumNumberOfLinkSlaves) {
                        name = Game.spawns.Spawn1.createCustomCreep(energy, 'linkslave');
                        }
                        else 
                            if (numberOfRepairers < minimumNumberOfRepairers) {
                            name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer');
                            }
                            else 
                                if (numberOfWallRepairers < minimumNumberOfWallRepairers) {
                                name = Game.spawns.Spawn1.createCustomCreep(energy, 'wallrepairer');
                                }
                                else 
                                    if (numberOfBuilders < minimumNumberOfBuilders) {
                                    name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder');
                                    }
    if (!(name < 0)) {
        console.log("If this is undefined, the system is holding a spawn | Spawned new creep: " + name );
    }
};
