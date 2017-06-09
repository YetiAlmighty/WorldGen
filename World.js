const attr = require('./attributes.json');

class World {
    constructor(){
        this.surface = attr.surface.types[this.getRandom(attr.surface.types.length)];
        this.atmosphere = attr.atmosphere.types[this.getRandom(attr.atmosphere.types.length)];
    }

    getRandom(length){
        return Math.floor(Math.random() * length);
    }
}

module.exports = World;
