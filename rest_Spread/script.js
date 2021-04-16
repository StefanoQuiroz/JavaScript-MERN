/*
//spread/rest ...
const animals = ['horse', 'dog', 'fish', 'cat', ' bird'];
const [ firstAnimal, secondAnimal, ...otherAnimals] = animals;
// return an array of elements
console.log(firstAnimal, secondAnimal, otherAnimals);
//return array´s elements
console.log(firstAnimal, secondAnimal, ...otherAnimals);
*/

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
};

//const { firstName, lastName, ...others} = person;
//console.log(firstName, lastName, others);
//variable diferente al nombre del objeto
// const { ...persons } = person;
// console.log( persons);
//copias completas
//React
// const {...persons} = person;
// const personCopy = {...persons};
//Copy Object from other Object
// console.log(personCopy === person);//false
// console.log(personCopy.addresses === person.addresses);
// console.log(" ");
// console.log(personCopy);
// console.log(" ");
// console.log(person);

const cancion = {
  nombre: "Me Rehúso",
  artista: "Danny Ocean",
  album: "Me rehuso - single",
  foto: "https://upload.wiki",
  listens: 0
}

//La nueva copia hace referencia al objeto original
// const copia = cancion;
// cancion.listens++;
// console.log({cancion, copia});

//Mejor manera copiando copia sin alterar la original
const copia = {...cancion};
copia.listens++;
copia.album = `Album Real de Danny Ocean`;
console.log({cancion, copia});