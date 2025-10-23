// Exemplo de herança em TypeScript

class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome)
    }

    fazerSom(): void {
        console.log(this.nome + " está latindo.")
    }

}

let meuCachorro = new Cachorro("Buddy")
meuCachorro.fazerSom()