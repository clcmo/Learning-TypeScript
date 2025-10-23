// Exemplo de interface em TypeScript

interface Veiculo {
    marca: string
    modelo: string
    ano: number
    acelerar(): void
}

class Carro implements Veiculo {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    acelerar(): void {
        console.log(this.marca + " " + this.modelo + " está acelerando.")
    }

}

let meuCarro = new Carro("Toyota", "Corolla", 2020)
meuCarro.acelerar()
