import { Leon, Lobo, Oso, Serpiente, Aguila } from './derivatives.js';
import Animal from './Animal.js';

async function obtenerAnimal(tipo) {
    const datosAnimales = {
    Leon: {
        img: './img/Leon.png',
        sonido: './sounds/Rugido.mp3'
    },
    Lobo: {
        img: './img/Lobo.jpg',
        sonido: './sounds/Aullido.mp3'
    },
    Oso: {
        img: './img/Oso.jpg',
        sonido: './sounds/Gruñido.mp3'
    },
    Serpiente: {
        img: './img/Serpiente.jpg',
        sonido: './sounds/Siseo.mp3'
    },
    Aguila: {
        img: './img/Aguila.png',
        sonido: './sounds/Chillido.mp3'
    },
};
    return datosAnimales[tipo];
};

function agregarAnimal(animal) {
    const contenedorAnimal = document.getElementById('Animales');
    const divAnimal = document.createElement('div');
    divAnimal.classList.add('animal-card');

    divAnimal.innerHTML = `
    <img src="${Animal.img}" alt="${Animal.nombre}" class="animal-img">
    <div class="animal-info">
        <h4>${animal.nombre}</h4>
        <p>Edad: ${animal.edad}</p>
        <p>Comentarios: ${animal._comentarios}</p>
        <button class="btn btn-primary btn sm" onclick="reproducirSonido('${animal.sonido}')">Escuchar sonido</button>
    </div>`;
    contenedorAnimal.appendChild(divAnimal);
};

function reproducirSonido(sonido) {
    const player = document.getElementById('player');
    player.src = sonido;
    player.play();
}


/* document.getElementById('btnRegistrar').addEventListener('click', async () => {
    const tipoAnimal = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;  
    const comentarios = document.getElementById('comentarios').value; 

    let nuevoAnimal;
    const datosAnimal = await obtenerAnimal(tipoAnimal);

    switch (tipoAnimal) {
        case 'Leon': 
            nuevoAnimal = new Leon('Leon', edad, './img/Leon.png', comentarios, './sounds/Rugido.mp3');
            break;
        case 'Lobo': 
            nuevoAnimal = new Lobo('Lobo', edad, './img/Lobo.jpg', comentarios, './sounds/Aullido.mp3');
            break;
        case 'Oso': 
            nuevoAnimal = new Oso('Oso', edad, './img/Oso.jpg', comentarios, './sounds/Gruñido.mp3');
            break;
        case 'Serpiente': 
            nuevoAnimal = new Serpiente('Serpiente', edad, './img/Serpiente.jpg', comentarios, './sounds/Siseo.mp3');
            break;
        case 'Aguila': 
            nuevoAnimal = new Aguila('Aguila', edad, './img/Aguila.png', comentarios, './sounds/Chillido.mp3');
            break;
        default:
            alert('Seleccione el animal');
            return;
    }

    obtenerAnimal(nuevoAnimal);
    return;
},
agregarAnimal(nuevoAnimal)
); */

document.getElementById('btnRegistrar').addEventListener('click', async () => {
    const tipoAnimal = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;

    let nuevoAnimal;
    const datosAnimal = await obtenerAnimal(tipoAnimal);

    switch (tipoAnimal) {
        case 'Leon':
            nuevoAnimal = new Leon('Leon', edad, datosAnimal.img, comentarios, datosAnimal.sonido);
            break;
        case 'Lobo':
            nuevoAnimal = new Lobo('Lobo', edad, './img/Lobo', comentarios, datosAnimal.sonido);
            break;
        case 'Oso':
            nuevoAnimal = new Oso('Oso', edad, datosAnimal.img, comentarios, datosAnimal.sonido);
            break;
        case 'Serpiente':
            nuevoAnimal = new Serpiente('Serpiente', edad, datosAnimal.img, comentarios, datosAnimal.sonido);
            break;
        case 'Aguila':
            nuevoAnimal = new Aguila('Aguila', edad, datosAnimal.img, comentarios, datosAnimal.sonido);
            break;
        default:
            alert('Seleccione el animal');
            return;
    }

    agregarAnimal(nuevoAnimal);
});
