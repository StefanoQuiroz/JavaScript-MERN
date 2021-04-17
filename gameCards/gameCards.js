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
        //attack other units
        //reduce target res by power
    }
}
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