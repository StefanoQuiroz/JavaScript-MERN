//GAME CARDS
//Cards: Unidades y Efectos
//Unidades se jugaran para obtener el control del tablero y lucharan con las unidades jugadas por un oponente
//Effect requiere que una unidad sea apuntada para poder jugar

class Card {
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
    //methods
}
//class Unit
class Unit extends Card{
    constructor(name, cost, resilience, power){
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
    }
    attack(target){
        //Target must be an instance of unit card
        if(!(target instanceof Unit)) throw new Error('Solo puedes atacar a otra unidad'); 
        //throw removes me from the function!!!! always place the throw new error in front

        //attack other units
        //reduce target res by power
    }
}

const unit1 = new Unit("Ninja Cinturon Rojo", 3, 3, 3);
console.table(unit1);
unit1.attack(3);







//class Effect
class Effects extends Card{
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