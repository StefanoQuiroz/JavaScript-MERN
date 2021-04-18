class Carta {
    constructor(nombre, costo){
        this.nombre=nombre;
        this.costo=costo;
    }
    //methods
}

class Unidad extends Carta{
    constructor(nombre, costo, poder, resiliencia){
        super(nombre, costo);
        this.poder = poder;
        this.resiliencia = resiliencia;
    }
    attack(target){
        if(!(target instanceof Unidad)) throw new Error('Solo puedes atacar a otra unidad'); 
        target.resiliencia -= this.poder;
    }
}

class Efectos extends Carta{
    constructor(nombre, costo, texto, stat, magnitud){
        super(nombre, costo);
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }
    played(target){
        if(!(target instanceof Unidad)) throw new Error('Solo puedes atacar a otra unidad');

        if(this.stat === 'Resiliencia'){
            target.resiliencia+=this.magnitud;
        }
        if (this.stat === 'Poder'){
            target.poder += this.magnitud;
        }
    }
}

const redBelt = new Unidad("Ninja Cinturon Rojo", 3, 3, 4);
const blackBelt = new Unidad ("Ninja Cinturon Negro",4,5,4);

const algoritmoDíficil = new Efectos('Algoritmo Difícil', 2, 'aumentar resistencia del objetivo en 3', 'Resiliencia', 3);
const RechazoDePromesaNoManejado = new Efectos('Rechazo de promesa no manejado', 1, 'reducir resistencia del objetivo en 3', 'Resiliencia', -2);
const programacionEnPareja = new Efectos('Programacion en pareja', 3, 'aumentar el poder del objetivo en 2', 'Poder', 2);
console.table({redBelt, blackBelt});
algoritmoDíficil.played(redBelt);
console.table({redBelt, blackBelt});
programacionEnPareja.played(redBelt);
console.table({redBelt, blackBelt});
//redBelt.attack(blackBelt);
//console.table({redBelt, blackBelt});




