const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55349933,
        lat: 14.344443,
        lng: 34.222213
    }
};

console.log({persona});

const persona2 = {...persona};

console.log(persona2);