//Clausura es una funcion que se devuelve desde otra funcion, tiene un comportamiento interesante

function outer(){
    let count = 0;
    function inner (){
        count++;
        console.log(count);
    }
    return inner;
}

const counter = outer(); //la variable es asignada la funcion outer()
counter(); // ejecuta 1
counter(); // ejecuta 2
counter(); // ejecuta 3
counter(); // ejecuta 4

console.log(count)// no ejecuta poque no se instancio!!