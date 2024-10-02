let array = ["Hola", "Mundo", "Javascript"];
let array2 = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");
let matriz = [[1, 2], [3, 4], [5, 6]];
console.log(array);
console.table(array2);
console.table(matriz);

/* Acceder a elemento */
console.log(array[1]);

//Longitud del array
console.log(array.length);

//itera sobre arrays
for (let i=0; i < array.length; i++) {
    console.log(array[i]);
}

for (let elemento of array) {
    console.log(elemento);
}

let f = (base, altura) => base*altura 

let f2 = (base, altura) => {
    //mas operaciones
    return base*altura 
}

function f3(base, altura) {
    return base*altura
}

for (let elemento of array) {
    console.log(elemento);
}

let f4 = (elemento) => console.log(elemento);
array.forEach(f4)

/* Forma ágil de iterar por un array */
array.forEach( (elemento) => console.log(elemento));
array.forEach( (elemento, indice) => console.log(indice + " - " + elemento));

/* Para tener un array de elementos nuevos */
let newArray = array.map( (elemento, indice) => indice + " - " + elemento);
console.log(newArray);

//Destructuring
const [ primero ] = array2;
console.log(primero);
const [ , , tercero ] = array2;
console.log(tercero);
const [ , segundo, , ...resto ] = array2;
console.log(...resto);

//Array Methods
//Para verificar que se cumpla una condicion en al menos un elemento
let bool = array.some( (e,i) => e === "Mundo" );
console.log(bool);
//Para buscar el indice de una ocurrencia
let indice = array.findIndex((e,i) => e === "Mundo");
console.log(indice); //Si no lo encuentra da -1
//Para reducir el array a un unico valor
const numeros = [1, 2, 3, 4, 5];
let resFinal = numeros.reduce( (resultado, elemento) => resultado + elemento, 0);
console.log(resFinal);
let strFinal = array.reduce( (resultado, elemento) => resultado + elemento, "");
console.log(strFinal);
//Para filtrar resultados
let arrayFiltrado = numeros.filter(e => e >=3);
console.log(arrayFiltrado);
//Para encontrar el primer elemento que cumpla una condicion
let elementoFiltrado = numeros.find(e => e >=3);
console.log(elementoFiltrado);
//Para verificar que se cumpla una condicion en todos los elementos del array
let boolEvery = array.every( (e,i) => e === "Mundo" );
console.log(boolEvery);
//Nuevo array que concatena a dos
let nuevoArray = array.concat(array2);
console.log(nuevoArray);
//Otra forma
let nuevoArray2 = [...array, ...array2]
console.log(nuevoArray2);

//Diferencias con Java

//los arrays en javascript pueden tener elementos de diferentes tipos
let arrayTipos = [1, 1.2, "Hola", true, array2];
console.log(arrayTipos);

//la longitud de los arrays en javascript si es mutable, es decir, podemos añadir elementos.
arrayTipos[arrayTipos.length] = "Nuevo elemento";
console.log(arrayTipos);

arrayTipos.push("Nuevo elemento al final");
arrayTipos.unshift("Nuevo elemento al principio");

//Nuevo array a partir de otro
let newArrayTipos = [...arrayTipos, "Elemento"];
console.log(arrayTipos);
console.log(newArrayTipos);

//Borrar elementos del final del array.
newArrayTipos.pop();
newArrayTipos.pop("Hola")
console.log(newArrayTipos);
//Borrar elementos del principio del array.
newArrayTipos.shift();
console.log(newArrayTipos);
//Borrar varios elementos.
newArrayTipos.splice(2,5); //borra 5 elementos desde el indice 2 (incluido)
console.log(newArrayTipos);
