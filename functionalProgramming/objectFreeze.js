//Objectfreeze() permite hacer inmutable a un const objeto no permite añadir nada a el, sin el si se puede.
const arr = Object.freeze([1,2,3]);
arr.push(300);
console.log(arr);

//Spread/rest
