// Function Declaration (Se lee antes que el resto de codigo, en la etapa de creacion)
function saludar() {
    console.log("Hello");
}

function saludarNombre(nombre) {
    console.log("Hello", nombre);
}

//Function Expression (Se lee en la etapa de ejecucion)
const saludar2 = function() {
    console.log("Hello");
}

const saludar2Nombre = function(nombre) {
    console.log("Hello", nombre);
}

//Arrow Function (Se lee en la etapa de ejecucion)
const saludar3 = () => console.log("Hello");
const saludar3Nombre = (nombre) => console.log("Hello", nombre);
const saludar3Nombre2 = (nombre) => {   nombre += ".";
                                        console.log("Hello", nombre);
                                    }

//Ejecución de funciones anteriores
const profe = "Joaquin"
saludar();
saludarNombre(profe);
saludar2();
saludar2Nombre(profe);
saludar3();
saludar3Nombre(profe);
saludar3Nombre2(profe);

//Diferencia funcion y metodo
const numero = parseInt("1"); //Funcion (o metodo estatico) se accede con su propio nombre o con el nombre de la clase
const letra = "Hello".charAt(0); //Metodo que se accede mediante el objeto "Hello"

//Valores por defecto
function imprimirSuma(n1 = 0, n2 = 0) {
    console.log(n1+n2);
}

imprimirSuma();
imprimirSuma(1);
imprimirSuma(1,2);

//Comunicacion entre funciones
function imprimirArray(array) {
    let str = "";
    for(let elem of array) {
        str += elem + " ";
    }
    console.log(str);
}

function imprimirArray2(array) {
    for(let fila of array) {
        imprimirArray(fila);
    }
}

imprimirArray2([[1,2,3], [4,5,6], [7,8,9]]);

//Funciones que devuelven valores
function sumar(n1=0, n2 = 0) {
    return n1+n2;
}

const resultado = sumar();
const resultado2 = sumar(1);
const resultado3 = sumar(1,2);
console.log(resultado);
console.log(resultado2);
console.log(resultado3);

const resta = (n1=0, n2=0) => n1-n2; //Si es una arrow function de una linea no hace falta return

const resultado4 = resta();
const resultado5 = resta(1);
const resultado6 = resta(2,1);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);

const mult = (n1=1, n2=1) => {  console.log("Vamos a multiplicar");
                                return n1*n2; //Con mas lineas si hace falta return
                            }

const resultado7 = mult();
const resultado8 = mult(2);
const resultado9 = mult(2,2);
console.log(resultado7);
console.log(resultado8);
console.log(resultado9);