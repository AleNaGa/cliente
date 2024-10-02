let mayorDeEdad = confirm("¿Eres mayor de edad?");
let puedeAcceder = mayorDeEdad ? "Puedes entrar" : "No puedes entrar";
alert(puedeAcceder);
let array = [1,2,3,4]
array.push(5)
console.log(array)
function saludar(){
    console.log("holamundo")
    }
    
    function saludar(nombre){
    return `hola ${nombre}`
    }
    let res = saludar("ale")
    console.log(res)