//Internamente, lo que haces es definir un prototype de otra forma.
class Persona {
    constructor(nombre, dni){
        this.nombre = nombre;
        this.dni = dni;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getDni() {
        return this.dni;
    }

    setDni(dni) {
        this.dni = dni;
    }

    saludar() {
        console.log(`Hola Mundo, soy ${this.nombre}`);
    }

    static saludarseEntreHumanos(persona1, persona2) {
        persona1.saludar();
        persona2.saludar();
    }

}

const ignacio = new Persona("Ignacio", "23456789A");
const antonio = new Persona("Antonio", "23456789A");
ignacio.saludar();
console.log("-----------------------------------------------");
Persona.saludarseEntreHumanos(ignacio, antonio);

//Herencia
class Profesor extends Persona{
    #sueldo;

    constructor(nombre, dni, asignaturas, sueldo) {
        super(nombre, dni);
        this.asignaturas = asignaturas;
        this.#sueldo = sueldo;
    }

    getAsignaturas() {
        return this.asignaturas;
    }

    setAsignaturas(asignaturas) {
        this.asignaturas = asignaturas;
    }

    getSueldo() {
        return this.#sueldo;
    }

    setSueldo(sueldo) {
        this.#sueldo = sueldo;
    }

    saludar() {
        console.log(`Hola Alumnos, soy ${this.nombre}`);
    }

    darKudo(persona1) {
        console.log(`${this.nombre} le ha dado un kudo a ${persona1.getNombre()}`)
    }
}

const ramon = new Profesor("Ramon", "34567890B", ["Base de datos", "Sistemas"], 1000);
ramon.darKudo(ignacio);
//console.log(ramon.#sueldo);
console.log(ramon.getSueldo());