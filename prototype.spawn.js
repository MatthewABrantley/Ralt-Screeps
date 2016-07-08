module.exports = function () {
    StructureSpawn.prototype.createCustomCreep = 
    function(energy, roleName) {
        // Defined variable numberOfParts
        var numberOfParts = Math.floor(energy / 750);
        // Define Body to be an array
        var body = [];
            // 
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
                    if (i != undefined) {
                        console.log("numberOfParts" + i);
                }
            }
        return this.createCreep(body, undefined, {role: roleName, working: false });
    };

};
