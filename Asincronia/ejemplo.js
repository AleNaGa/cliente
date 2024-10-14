/*const task1 = () => setTimeout(() => console.log('Adios Mundo'), 3000);
const task2 = () => setTimeout(() => console.log('Hola Mundo'), 5000);

task1();
task2();

function universal(a,b,f) {
    return f(a,b);
}

let result = universal(1,2, (a,b) => a+b)
console.log(result);
*/
fetch("json/alumnos.json")
    .then((res=>res.json()))
    .then(json =>{
        for(let element of json) {
        let h1 = document.createElement("h1");
        h1.textContent = element.nombre;
        document.body.appendChild(h1);

        let p = document.createElement("p");
        p.textContent = element.apellido;
        document.body.appendChild(p);
        
        let p2 = document.createElement("p");
        p2.textContent = element.edad;
        document.body.appendChild(p2);
        }
    })
    .catch(() => console.log("Error"))


console.log("hola mundo")