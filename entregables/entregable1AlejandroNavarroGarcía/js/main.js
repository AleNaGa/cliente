/*
Posicionarnos en el elemento #contenedorCartas y mostrarme por consola los siguientes elementos:
1) Su primer hijo
2) Su tercer hijo
3) El siguiente hermano del tercer hijo
4) Su último hijo
5) Su padre
6) El padre del padre
7) Su hermano anterior
8) Las clases del último hijo
*/
//el padre
const padre = document.querySelector("#contenedorCartas");
console.log("Elemento: ",padre);
//1 el primer hijo
const primerHijo = padre.firstElementChild;
console.log("primerHijo: ",primerHijo);
//2 el tercer hijo
const tercerHijo = padre.children[2];
console.log("tercerHijo: ",tercerHijo);
//3 el hermano siguiente
const hermanoSiguiente = tercerHijo.nextElementSibling;
console.log("hermanoSiguiente: ",hermanoSiguiente);
//4 el ultimo hijo
const ultimoHijo = padre.lastElementChild;
console.log("ultimoHijo: ",ultimoHijo);
//5 su padre
const padreUltimoHijo = ultimoHijo.parentElement;
console.log("padreUltimoHijo: ",padreUltimoHijo);
//6 el padre del padre
const padrePadre = padre.parentElement;
console.log("padrePadre: ",padrePadre);
//7 el hermano anterior
const hermanoAnterior = hermanoSiguiente.previousElementSibling;
console.log("hermanoAnterior: ",hermanoAnterior);
//8 las clases del ultimoHijo
const clasesUltimoHijo = ultimoHijo.classList;
console.log("ultimoHijo clases: ",clasesUltimoHijo);