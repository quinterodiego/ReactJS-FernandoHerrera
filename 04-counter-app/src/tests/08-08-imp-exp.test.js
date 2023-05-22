import { getHeroeById } from "../base-pruebas/08-imp-exp";
import { getHeroesByOwner } from "../base-pruebas/08-imp-exp";

describe('Prueba en 08-imp-exp', () => {
    test('getHeroeById de retornar un heroe por ID', () => {
        
        const id= 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC'})
    })

    test('getHeroeById de retornar undefined si no existe el ID', () => {
        
        const id= 100
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()
    })
    
    test('getHeroesByOwner debe retornar heroes de DC', () => {

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        const lengthHeroes = 3

        expect(heroes.length).toEqual(lengthHeroes)
    })

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {

        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        const lengthHeroes = 2

        expect(heroes.length).toEqual(lengthHeroes)
    })
});
