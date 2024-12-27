import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funcions', () => { 
  test('should return an object', () => { 

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser()

    expect(testUser).toEqual(user);
  })

  test('should return an object', () => { 
    
    const name = "Diego";

    const activeUser = getUsuarioActivo(name);

    expect(name).toEqual(activeUser.username);

  })
 })