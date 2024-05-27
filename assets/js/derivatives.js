import Animal from './Animal.js';

class Leon extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    rugir () {
        return this.audioAnimal();
    };
};

class Lobo extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    aullar () {
        return this.audioAnimal();
    };
};

class Oso extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    gruñir () {
        return this.audioAnimal();
    };
};

class Serpiente extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    sisear () {
        return this.audioAnimal();
    };
};

class Aguila extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    chillar () {
        return this.audioAnimal();
    };
};

export { Leon, Lobo, Oso, Serpiente, Aguila };