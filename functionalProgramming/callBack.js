/*
setTimeout(function(){
    console.log('Start');
},1000);
//ejecuta la función despues de un retraso

console.log('End');
*/
//declarar una variable y establecer igual a una fucion y luego llamar esa  funcion con el nombre de la variable.

/*
const exampleFunction = message => console.log(message);

//exampleFunction('Hello from exampleFunction');

//pasando una funcion como parametro a alguna funcion principal => pasar una funcion al parametro de otra funcion
 const parentFunction = callback => callback('hello from example Function');

 parentFunction(exampleFunction);
*/
 //estas funciones callback se usan con funciones anonimas (funciones sin nombre)
const parentFunction = callback => callback('hello from example Function');

parentFunction(function(message){
     console.log(message);
})
