const Animal = require ('./Animal');

class Leon extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    rugir () {
        this.audioAnimal();
    };
};

class Lobo extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    aullar () {
        this.audioAnimal();
    };
};

class Oso extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    gruñir () {
        this.audioAnimal();
    };
};

class Serpiente extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    sisear () {
        this.audioAnimal();
    };
};

class Aguila extends Animal {
    constructor (nombre, edad, img, comentarios, sonido) {
        super (nombre, edad, img, comentarios, sonido);
    };
    chillar () {
        this.audioAnimal();
    };
};

export {Leon, Lobo, Oso, Serpiente, Aguila}