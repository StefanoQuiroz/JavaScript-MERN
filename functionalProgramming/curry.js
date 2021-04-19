//Curry : ejecutar una funcion en lugar de todo
//sin curry
/*
function ninjaBelt(ninja, beltColor){
     console.log(`Ninja ${ninja} has earned a ${beltColor} belt.`);
}

//ninjaBelt('Eileen', 'black');
*/
//con curry
const ninjaBelt = (ninja) => {
    return function belt(beltColor){
        console.log(`Ninja ${ninja} has earned a ${beltColor} belt.`);
    }
}
//doble invocación
ninjaBelt('Eileen')('black');
