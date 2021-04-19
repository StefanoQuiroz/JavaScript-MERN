//.map()
/*
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceriesList = groceries.map( item => `<li>${item}</li>`);

//console.log({groceriesList});

const values = [1,2,3,4,5];
const cubes = values.map(val => val **3);
console.log({values,cubes});
*/

//.filter()
const values = [1,2,3,4,5];
const evens = values.filter(val => !(val%2));
//console.log({pares: evens})

//Para saber si queremos la letra "o" en las cadenas
const groceries = ["peral onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter(item => item.includes('o'));//includes devuelve verdadero o falso
console.log(oFoods);

//filtro y mapa juntos
const values2 = [1,2,3,4,5];
const oddCubes = values2.filter( item => item%2).map( item => item**3);
console.log({values2, oddCubes});