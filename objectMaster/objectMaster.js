//Object Master
const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//Pokemones que tengan nombres que comiencen con B
//const bFirstLetterPokemon = pokemon.filter( p => p.name[0] === 'B').map( p=> p.name);
//Formas Iguales
//const bFirstLetterPokemon = pokemon.filter( ({name}) => name[0] === 'B' ).map( ({name}) => name);
//console.log(bFirstLetterPokemon);

//ids
//const pkmnIds = pokemon.map(p => p.id);
//Fromas iguales
//const pkmnIds = pokemon.map( ({id}) => id);
//console.log({pkmnIds});

//Usando la matriz de Pokémon anterior encuentre lo siguiente.
//1. Una serie de objetos Pokémon donde la identificación es divisible por 3
const pkmnIdDivPorTres = pokemon.filter(({id}) => !(id%3));
console.log(pkmnIdDivPorTres);
//2. Una serie de objetos Pokémon que son del tipo "fuego"
const pkmnTipoFuego =  pokemon.filter(({types}) => types.includes('fire'));
console.log(pkmnTipoFuego);
//3. Una variedad de objetos Pokémon que tienen más de un tipo
const pkmnMasDeUnTipo = pokemon.filter(({types}) => types.length > 1);
console.log(pkmnMasDeUnTipo);
//4. una matriz con solo los nombres de los Pokémon
const pkmnNombre = pokemon.map(({name})=> name);
console.log({pkmnNombre});

