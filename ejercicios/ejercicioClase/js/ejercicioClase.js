// Crear una clase Vehículo y una clase coche, con un método de clase y otro estático

class Vehiculo {
    constructor(marca, modelo, color) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
    }}

class Coche extends Vehiculo {
    constructor(marca, modelo, color) {
        super(marca, modelo, color)
    }
}

