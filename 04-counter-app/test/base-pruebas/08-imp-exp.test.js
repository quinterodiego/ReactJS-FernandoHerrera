import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
  test('should return an heroe by id', () => { 
    
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    });
  })

  test('getHeroeById debe retornar undefined si no existe', () => { 
    
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar heroes de DC', () => { 
      
      const owner = 'DC';
      const getHeroes = getHeroesByOwner(owner);
      expect(getHeroes).toEqual([
        {
          id: 1,
          name: 'Batman',
          owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }
      ]);

      expect(getHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });

    test('getHeroesByOwner debe retornar heroes de Marver', () => { 
      
      const owner = 'Marvel';
      const getHeroes = getHeroesByOwner(owner);
      expect(getHeroes).toEqual([
        {
          id: 2,
          name: 'Spiderman',
          owner: 'Marvel'
        },
        {
          id: 5,
          name: 'Wolverine',
          owner: 'Marvel'
        },
      ]);

      expect(getHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });
 })