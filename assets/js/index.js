import {Leon, Lobo, Oso, Serpiente, Aguilar} from './derivatives';

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

document.getElementById('btnRegistrar').addEventListener('click', async () => {
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

    agregarAnimal(nuevoAnimal);
});
