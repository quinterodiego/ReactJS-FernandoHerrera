const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = nombre => `Hola ${nombre}`;

console.log(saludar3('Gokú'))

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'ElUsuario123'
    }
}

console.log(getUser())

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC123',
        username:nombre
    });


const usuarioActivo = getUsuarioActivo('Diego');
console.log(usuarioActivo)