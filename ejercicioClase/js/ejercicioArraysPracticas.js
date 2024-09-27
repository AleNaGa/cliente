let array = [3,7,11,8,1,4]
/*
1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. 
La edad debe pedirla por una alerta.*/
let edad = prompt("Ingresa tu edad")
for(n of array){
console.log(n*edad)
}

/*
2) Modificar el valor de cada elemento del array por el 
resto de dividir cada elemento entre 2.
*/
console.log(array)
array = array.map((n)=>n%2)
console.log(array)




let string = "Jurado, alberto, Marcelo, Pablo, Maria"
/*
1) Definir un array en cuya cada posición esté cada nombre del string anterior.
*/
let arrayNames = string.split(", ")
console.log(arrayNames)
/*
2) Dado el array anterior, mostrar por pantalla en que posición se encuentra 
la letra a en cada elemento del array.
*/
for(n of arrayNames){
    console.log(n.indexOf("a"))
}
/*
3) Dado el array anterior, cambiar en cada elemento del array anterior la letra a por la e.*/
arrayNames = arrayNames.map((n)=>n.replace("a","e"))
console.log(arrayNames)
/*
4) Crear una función que dado un array devuelva el array al revés 
(la posición 0 ahora tendrá el valor de la última posición y viceversa). 
Crearla como función normal y como función flecha.
*/
let arrayDerecho = [1,2,3,4,5,6,7,8,9,10]
console.log("array original -> " + arrayDerecho)
function reverse(array){//funcion normal
    let array2 = []
    for(n of array){
        array2.unshift(n)
    }
    return array2 
}  
let arrayReverse1 = reverse(arrayDerecho)
console.log("array reverse funcion -> " + arrayReverse1)
console.log("array original -> " + arrayDerecho)
let arrayReverse2 = []
arrayDerecho.map((a)=>arrayReverse2.unshift(a))
console.log("array reverse flecha -> " + arrayReverse2)
/*
5) Dado el array de nombres, poner cada nombre en mayúsculas y al revés
*/
console.log(arrayNames.map((n)=>n.toUpperCase()))// solo imprimir
console.log(arrayNames.map((n)=>n.toLowerCase()))// solo imprime 
/*
1)Crea un array de números de 100 posiciones, 
que contendrá los números del 1 al 100. Partiendo del array ya creado y completamente relleno, 
obtener la suma de todos ellos y la media.
*/
let arrayNumeros = [1]
arrayNumeros.map(() => {for(let i=2;i<=100;i++){arrayNumeros.push(i)}})
console.log(arrayNumeros)
console.log(arrayNumeros.reduce((a,b)=>a+b))
console.log(arrayNumeros.reduce((a,b)=>a+b)/arrayNumeros.length)
/*
2)Crear un array de enteros donde indicamos por teclado el tamaño del array, 
rellenamos el array con números aleatorios entre 0 y 9, y 
mostramos por pantalla el valor de cada posición y la suma de todos los valores.*/
let size = prompt("ingresa el tamanio del array")
let arrayRanmd = new Array(size)
for(let i=0;i<size;i++){
    arrayRanmd[i] = Math.floor(Math.random()*10)
}
console.log("el array es: ". arrayRanmd)
for(n of arrayRanmd){console.log(n)}
console.log(arrayRanmd.reduce((a,b)=>a+b))
/*
3)Leer por alerta (o formulario en php) un numero entero y crear un array de ese tamaño, 
con valores aleatorios entre 1 y 300. A continuación, pedir un número entero entre 0 y 9,
e imprimir todas las posiciones del array que tengan un número acabado en ese dígito.
 Esos números, además de imprimirlos, almacenarlos en un array de salida con el tamaño adecuado.*/
let siz = prompt("ingresa el tamanio del nuevo array")
let array1300 = new Array(siz)
for(let i=0;i<siz;i++){
    array1300[i] = Math.floor(Math.random()*299)+1
}
console.log(array1300)
let num = prompt("ingresa un numero entre 0 y 9")
array1300.filter((n)=>n%10==num).forEach((n)=>console.log(n))

/*
 4)Introduce por alerta(o formulario en php) el número de tu DNI, y vuelve a imprimirlo 
seguido de la letra. Para calcular la letra, cogeremos el resto de dividir nuestro dni entre 23, el resultado debe estar entre 0 y 22. Tendrás que crear un array que contenga (ver imagen):
*/
let dni = prompt("ingresa tu dni")
let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]
console.log(dni + letras[dni%23])

//1) Define una función que reciba un número n y devuelva si es primo o no
let isPrimo = prompt("introduce un numero para saber si es primo")
function prime (num){
    if (num === 1 || num === 0) return false; 
    for(i = 2; i < num/2; i++) 
        if(num % i === 0) return false; else return true;} 
if(prime(isPrimo))console.log("es Primo")
    else console.log("no es Primo")
//2) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si hay algún número primo
let arrayEj2 = [5,1,7,8,2,4,6,3,9]
if(arrayEj2.every((n)=>prime(n)))
    console.log("es Primo")
else console.log("no es Primo")
//3) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si todos son números primos
if(arrayEj2.every((n)=>!prime(n))){
    console.log("no todos son Primos")
}
//4) Dado el array [5,1,7,8,2,4,6,3,9], comprueba en que posición está el primer número primo
//5) Dado el array [5,1,7,8,2,4,6,3,9], comprueba cual es el primer número primo
for(n of arrayEj2){
    if(prime(n)){
        console.log("está en la posicion".arrayEj2.indexOf(n) +" y es el numero: "+n  )
        break
    }
}
//6) Dado el array [5,1,7,8,2,4,6,3,9], quédate sólo con los números primos
let soloPrimos = arrayEj2.filter((n)=>prime(n))
//7)  Dado el array de números primos, dame el producto de todos los elementos del array
let productos = 0;
for(n of soloPrimos){
    prodctos = productos*n
}
console.log(productos)
//8)  Define una función que reciba un String y devuelva si es palíndromo o no
function palindromo(string){
    return string == string.split("").reverse().join("")
}
//9) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], 
//comprueba si hay algún palíndromo
let arrayPalind = ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"]
for(n of arrayPalind){
    if(palindromo(n))console.log("hay un palindromo")
}
//10) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], 
//comprueba si todos son palíndromos
if(arrayPalind.every((n)=>palindromo(n)))console.log("todos son palindromos")
//11) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], 
//comprueba en que posición está el primer palíndromo
//12) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], 
//comprueba cual es el primer palíndromo
for(n of arrayPalind){
    if(palindromo(n)){
        console.log("está en la posicion".arrayPalind.indexOf(n) +" y es el palindromo: "+n  )
        break
    }
}
//13) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], 
//quédate sólo con los palíndromos
let arraySoloPalin = arrayPalind.filter((n)=>palindromo(n))
//14)  Dado el array de números palíndromos, dame la concatenación de todos los elementos del array
console.log(arraySoloPalin.join(", "))


//1) Dado un array de números, verifica si hay algún número negativo
function negative(array){
    return array.some((n)=>n<0)
}
//2) Dado un array de Strings, encuentra el índice del primer String que empiece por la letra 'A'
function firstA(array){
    return array.findIndex((n)=>n[0]=="A")
}
//3) Dado un array de números de 3 o más cifras, calcula la suma de las últimas cifras de cada número
function suma3cifras(array){
    let suma = 0;
    for(n of array){
        if(n>=100){
            suma+=n%10;
        }
    }
}
//4) Dado un array de arrays, filtra el array para que sólo queden los arrays de longitud 5
function filtroArray5(array){
    for(n of array){
        if(n.length!=5){
            array.splice(array.indexOf(n),1)
    }}
    return array
}
//5) Dado un array de Strings, encuentra el primer string de longitud 3
function firstLength3(array){
    return array.find((n)=>n.length==3)
}
//6) Dado un array de números, verifica que todos los números sean de 2 cifras o más
function dosCifras(array){
    return array.every((n)=>n>=10)
}


