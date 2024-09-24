let altura = Number.parseInt(prompt("Introduce tu altura: "))
let peso = Number.parseInt(prompt("Introduce tu peso: "))

console.log(altura + peso)

let edad = Number.parseInt(prompt("Introduce tu edad: "))

let esMayorEdad = edad >= 18 ? true : false

let res = 0
let i = 50
for (let c = 0; c < 5; c++) {
    res+=i
    i+=2
}

i = 50
let c = 0
res = 0
while (c<5) {
    res+=i
    i+=2
    c++
}

i = 50
c = 0
res = 0
do {
    res+=i
    i+=2
    c++
}
while (c<5) 

let realName = prompt("Introduce tu nombre: ")
let mierda = "Mierda"
let bool = realName.includes(mierda)

if (bool) {
    let i = realName.indexOf(mierda)
    realName.slice(i, i + mierda.length)
    console.log(`No se permite la palabra ${realName}`)
} else {
    alert("Bienvenido")
}

let profes = "Joaquin, MariaFernanda, JoseCarlos, Jorge"
let nombres = profes.split(', ')

for (n of nombres) {
    console.log(n)
}



