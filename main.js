//Import Modules
require('prototype.spawn')();
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallrepairer');
var roleHarvesterFar = require('role.harvesterfar');
var roleLinkSlave = require('role.linkslave');

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
    
    var numberOfCreeps = _.sum(Game.creeps, (c) =>
    c.memory.role != 'undefined');

    var minimumNumberOfHarvesters = 4;
    var minimumNumberOfHarvesterFars = 1;
    var minimumNumberOfLinkSlaves = 1;
    var minimumNumberOfUpgraders = 1;
    var minimumNumberOfBuilders = 2;
    var minimumNumberOfRepairers = 2;
    var minimumNumberOfWallRepairers = 1;
    
    var maximumNumberOfBuilders = 5;
    
    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
    var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallrepairer');
    var numberOfHarvesterFars = _.sum(Game.creeps, (c) => c.memory.role == 'harvesterfar');
    var numberOfLinkSlaves = _.sum(Game.creeps, (c) => c.memory.role == 'linkslave');
    
    var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    var name = undefined;
    
    if (numberOfHarvesters < minimumNumberOfHarvesters) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester');
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters == 0) {
                name = Game.spawns.Spawn1.createCustomCreep(
                    Game.spawns.Spawn1.room.energyAvailable, 'harvester');
        }
    }
    else if (numberOfHarvesterFars < minimumNumberOfHarvesterFars) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvesterfar');
        }
    else if (numberOfUpgraders < minimumNumberOfUpgraders) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader');
    }
    else if (numberOfLinkSlaves < minimumNumberOfLinkSlaves) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'linkslave');
    }
    else if (numberOfRepairers < minimumNumberOfRepairers) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer');
    }
    else if (numberOfWallRepairers < minimumNumberOfWallRepairers) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'wallrepairer');
    }
    else if (numberOfBuilders < minimumNumberOfBuilders) {
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder');
    }
    else if (numberOfBuilders < maximumNumberOfBuilders){
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder');
    }
    if (!(name < 0)) {
        console.log("If this is undefined, the system doesn't know what to spawn | Spawned new creep: " + name );
    }
};
