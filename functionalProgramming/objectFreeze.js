/*
//Objectfreeze() permite hacer inmutable a un const objeto no permite añadir nada a el, sin el si se puede.
const arr = Object.freeze([1,2,3]);
//arr.push(300);
console.log(arr);

//Spread/rest
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

//Para agregar un elemento a esa lista se hace una nueva copia de groceryList, se le agrega el objeto thyme en la lista


const needThyme = [...groceryList, {"item": "thyme", "haveIngredient": false}];
console.log({needThyme});

//Tambien podemos usar .concat()
const needThyme2 = groceryList.concat([{"item": "thyme", "haveIngredient": false}]);
console.log(needThyme2);

//Slice(inio, fin) devuelve la copia de un array  copia los atributos del ingrediente en el indice 5 y los sobreescribe "haveIngredient" : false
const gotTheThyme = [...needThyme.slice(0,5), {...needThyme[5], "haveIngredient": true} ]
console.log({gotTheThyme});

//eliminando el celery se hace una copia de 0 y 1  elementos  y luego del 3 hacia el final
const notCelery = [...gotTheThyme.slice(0,2), ...gotTheThyme.slice(3)];
console.log({notCelery});
*/

//sort(), de forma predeterminada, en orden alfabetico y ascendente
//sort(function(a,b){return a-b}) ascendiente
//sort(function(a,b){return b-a}) descendiente


//Para strings
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
//items.sort(); // esto lanzará un error 
//Hacer una copia siempre
const sortItems = [...items].sort();
console.log(sortItems);
//Para numeros
const numbers = [10, 5, 3, 12, 22, 8];
const numberSort = numbers.sort(function(a,b){return a - b;});
console.log(numberSort);
//Para objetos
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
const sortedGroceries = [...groceryList].sort((a,b)=> a.item > b.item)
console.log(sortedGroceries)
