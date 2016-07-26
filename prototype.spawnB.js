//Module to Export
module.exports = function () {
    StructureSpawn.prototype.createCustomCreep = 
    function(energy, roleName) {
        // Defined variable numberOfParts
        var numberOfParts = Math.floor(energy / 400);
            console.log("Worker" + numberOfParts);
        // Define Body to be an array
        var body = [];
            // 
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
        return this.createCreep(body, undefined, {role: roleName, working: false });
    };

};

// What I'm I'm supposed to have numberOfParts = the # of cycles to run through pushing the body array? if I change this to 3 parts, and make numberOfParts = 3, it will gen 9 body parts? 
