class Card {
    constructor(name, cost){
        this.name=name;
        this.cost= cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
        this.effects = []; //effects arre from units!!!
    }
    attack(target){
        if(target instanceof Unit){
            //reducing the enemy´s res by my power
            target.res -= this.power;
            if(target.res<=0){
                console.log(`Enemy's name: ${target.name} was defeated by: ${this.name}`)
            }
        } else{
            throw new Error ('Target must be Unit')
        }
    }
}

class Effects extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
        

    }
    played(target){
        if(target instanceof Unit){
            //target => Unit stat => Resilience or power unity
            target.effects.push(this.name);
            target[this.stat] += this.magnitude;
        } else{
            throw new Error ('Target must be Unit')
        }
    }
}

const ninjaRedBelt = new Unit('Ninja Cinturon Rojo',3,3,4);
const ninjaBlackBelt = new Unit('Ninja Cinturon Negro',4,5,4);

const algoritmoDuro = new Effects('Algoritmo Dificil',2,'aumentar la resistencia del objetivo en 3', 'res', 3);
const rechazoDePromesaNoManejado = new Effects('Rechazo de promesa no manejado', 1, 'reducir la resistencia del objetivo en 2', 'res', -2);
const programacionEnPareja = new Effects('Programacion en Pareja', 3, 'aumentar el poder del objetivo en 2', 'power', 2);
//attack()
// redBelt.attack(blackBelt);
//played effects
//programacionEnPareja.played(redBelt);
//Game
//1. redBelt
algoritmoDuro.played(ninjaRedBelt);
//2. blackBelt
rechazoDePromesaNoManejado.played(ninjaRedBelt);
programacionEnPareja.played(ninjaRedBelt);
ninjaRedBelt.attack(ninjaBlackBelt);
console.table({ninjaRedBelt, ninjaBlackBelt});
//Finished own version