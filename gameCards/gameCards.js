class Carta {
    constructor(nombre, costo){
        this.nombre=nombre;
        this.costo=costo;
    }
}

class Unidad extends Carta{
    constructor(nombre, costo, poder, resiliencia){
        super(nombre, costo);
        this.poder = poder;
        this.resiliencia = resiliencia;
        this.efectos=[];
        this.asesino = null;
    }
    attack(target){
        if(!(target instanceof Unidad)) throw new Error('Solo puedes atacar a otra unidad'); 
        target.resiliencia -= this.poder;
        target.asesino=this.nombre;
        if(target.resiliencia <= 0){
            console.log(`${target.nombre} fue asesinado por ${target.asesino}`)
        }
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
        if(!(target instanceof Unidad)){
            throw new Error('Solo puedes atacar a otra unidad')
        } else {
            //incrementar o reducir su magnitud
            target[this.stat] += this.magnitud;
            //añadiendo un nuevo efecto
            target.efectos.push(this.stat);
        }
    }      
}

const redBelt = new Unidad("Ninja Cinturon Rojo", 3, 3, 4);
const blackBelt = new Unidad ("Ninja Cinturon Negro",4,5,4);
//target[this.stat = "resiliencia" accede a valor del key resiliencia]
const algoritmoDíficil = new Efectos('Algoritmo Difícil', 2, 'aumentar resistencia del objetivo en 3', 'resiliencia', 3);
const rechazoDePromesaNoManejado = new Efectos('Rechazo de promesa no manejado', 1, 'reducir resistencia del objetivo en 3', 'resiliencia', -2);
const programacionEnPareja = new Efectos('Programacion en pareja', 3, 'aumentar el poder del objetivo en 2', 'poder', 2);

algoritmoDíficil.played(redBelt);
rechazoDePromesaNoManejado.played(redBelt);
programacionEnPareja.played(redBelt);
redBelt.attack(blackBelt);
console.table({redBelt, blackBelt});

// console.table({redBelt, blackBelt})
// algoritmoDíficil.played(blackBelt);
// console.table({redBelt, blackBelt})
// redBelt.attack(blackBelt);
// console.table({redBelt, blackBelt})
// programacionEnPareja.played(blackBelt)
// creo una propiedad se le asigna objetos[poder]
//console.table({redBelt, blackBelt, resDeYellow: blackBelt["poder"]()})
