interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
  country: string;
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC123',
    city: 'New York',
    country: 'USA'
  }
}

console.log( ironman );