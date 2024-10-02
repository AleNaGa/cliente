/*
- Pide por pop-up la altura y el peso y almacénalo cada uno en una variable
- Imprime por pantalla la suma de ambas variables
- Pide por pop-up la edad y almacénala en una variable
- Define una variable con un operador ternario que sea true si la edad es mayor que 18 o false si es menor
*/
let altura = prompt("Ingresa tu altura");
let peso = prompt("Ingresa tu peso");
let pesoAltura = Number(altura) + Number(peso);
console.log(`La suma es ${pesoAltura}`);
let edad = prompt("Ingresa tu edad");
let esMayor = edad?edad>=18: edad<18;
alert(`Eres mayor de edad?  ${esMayor}`);

/*
- Crea un bucle que sume los primeros 5 números pares entre 50 y 70. Haz esto de 3 maneras distintas.
- Pide por pop-up un nombre y almacénalo en una variable.
- Comprueba si el nombre contiene la palabra malsonante "Mierda".
- En caso de contenerla, haz un slice del nombre de manera que 
el resultado de la subcadena dicha sea dicha palabra malsonante.
En caso de no contenerla, muestra por pantalla un mensaje de bienvenida mediante un pop-up.*/
    let suma = 0 
    let num = 50
    // forma 1
    for(let i=0;i<5;i++){
    suma+= num
    num+=2
    }
    alert(`La suma es ${suma}`);
    // forma 2
    suma = 0 
    num = 50
    let i = 0
    while (i<5){
        suma+= num
        num+=2
        i++
    }
    suma = 0 
    num = 50
    i = 0
    do{
        suma+= num
        num+=2
        i++
    } while (i<5)
    alert(`La suma es ${suma}`);
    // ejercicio mierda
 let palabraMalsonante = "mierda"
    let nombre = prompt("Ingresa tu nombre").toLowerCase();
    if(nombre.includes(palabraMalsonante)){  
        let malsonante = nombre.slice(nombre.indexOf(palabraMalsonante), nombre.indexOf(palabraMalsonante)+palabraMalsonante.length);
        alert(`Bienvenido ${malsonante}`);
    } else{
    alert(`Bienvenido ${nombre}`);
    }
    /*
    - Crea una cadena con los nombres de los compañeros 
    que estén en tu misma fila, separados por comas.
- Almacena en una variable el array resultado de separar la cadena anterior por comas 
(Usar un método de la clase String).
- Itera con un bucle dicho array, 
imprimiendo por consola cada elemento.
*/
let nombres = "ale, juanan, omero, anacleto"
let  arrayNames = nombres.split(', ')

for (i=0;i<arrayNames.length;i++){
    console.log(arrayNames[i])
}
for(n of arrayNames){ // foreach
    console.log(n)
}

