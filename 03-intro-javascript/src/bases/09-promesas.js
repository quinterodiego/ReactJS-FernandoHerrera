import getHeroeById from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//        resolve(heroe);
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('El heroe seleccionado es: ', heroe)
// })

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            } else {
                reject('No se pude encontrar el héroe')
            }
        }, 2000)
    });
}

getHeroeByIdAsync(11)
    .then((heroe) => {
        console.log('Heroe: ', heroe)
    })
    .catch(err => console.warn(err))