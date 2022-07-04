const persona = {
    nombre: 'Diego',
    edad: 36,
    clave: 'Desarrollador'
}

const { nombre, edad, clave } = persona;

const useContext = ({nombre, edad, clave, rango = 'Developer'}) => {
    return {
        nombreClave: clave,
        anios: edad
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, anios } = useContext(persona);

console.log(nombreClave, anios);