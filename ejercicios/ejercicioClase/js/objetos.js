
//JS es lenguaje orientado a PROTOTIPOS

//objeto literal
let personaje={
    nombre: "pedro",
    saludar: function(npc){
        console.log("hola " + npc)
    },
    edad: 25,
    pokemon: pokemon("pikachu", "electrico", 10),
    mostrarPokemon: function(){
        console.log(this.nombre + " ha utilizado a " + this.pokemon.nombre)
    }
}

//Forma antigua de hacer constructor de prototipo
function  pokemon (nombre = "none", tipo = "none", ataque=0){
    this.nombre = nombre    
   this.tipo = tipo
   this.ataque = ataque
}   

// crear un prototipo
pokemon.prototype.atacar = function(npc){
    console.log(this.nombre + " ha atacado a " + npc)
}
let charmander = new pokemon("charmander", "fuego", 10)
charmander.atacar("sabana")

function pokemonPelota(nombre, tipo, ataque, peloteo){
    pokemon.call(this, nombre, tipo, ataque)
    this.peloteo = peloteo
}

let charmanderPelota = new pokemonPelota("charmander", "fuego", 10, "tkiero")
// NO PUEDE PQ NO HEREDA DE LA CLASE pokemon charmanderPelota.atacar("sabana")





