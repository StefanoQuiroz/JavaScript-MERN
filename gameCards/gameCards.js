//GAME CARDS
//Cards: Unidades y Efectos
//Unidades se jugaran para obtener el control del tablero y lucharan con las unidades jugadas por un oponente
//Effect requiere que una unidad sea apuntada para poder jugar

class Carta {
    constructor(nombre, costo){
        this.nombre=nombre;
        this.costo=costo;
    }
    //methods
}
//class Unit
class Unidad extends Carta{
    constructor(nombre, costo, poder, resiliencia){
        super(nombre, costo);
        this.poder = poder;
        this.resiliencia = resiliencia;
    }
    attack(target){
        //Target must be an instance of unit card is an other unit
        if(!(target instanceof Unidad)) throw new Error('Solo puedes atacar a otra unidad'); 
        //throw removes me from the function!!!! always place the throw new error in front
        //la resiliencia disminuye al poder del atacante
        target.resiliencia -= this.poder;
        //attack other units
        //reduce target res by power
    }
}

const redBelt = new Unidad("Ninja Cinturon Rojo", 3, 3, 4);
const blackBelt = new Unidad ("Ninja Cinturon Negro",4,5,4);
console.table({redBelt, blackBelt});
redBelt.attack(blackBelt);
console.table({redBelt, blackBelt});










//class Effect
class Efectos extends Carta{
    




    //Los efectos requerirán un "objetivo" cuando se juegan. Aumentan o disminuyen el poder o la resistencia de la "Unidad" a la que apuntan. Del mismo modo, las "Unidades" pueden atacar a otras "Unidades", cuando lo hacen disminuyen la "resistencia" del objetivo por el "poder" del atacante. 
    //( Raise/lower the targets  resilience/power by amount ) => text   Raise = Magnitude = amount   stat = resilience
}

/*
play( target ) {
    if( target instanceof Unit ) {
        // implementa el texto de carta aquí
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
*/