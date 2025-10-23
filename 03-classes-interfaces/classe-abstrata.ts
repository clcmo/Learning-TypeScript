// Exemplo de classe abstrata em TypeScript

abstract class Forma {
    abstract calcularArea(): number
}

class Retangulo extends Forma {
    largura: number
    altura: number
    
    constructor(largura: number, altura: number) {
        super()
        this.largura = largura
        this.altura = altura
    }

    calcularArea(): number {
        return this.largura * this.altura
    }

}

let meuRetangulo = new Retangulo(5, 10)
console.log("Área do retângulo: " + meuRetangulo.calcularArea())