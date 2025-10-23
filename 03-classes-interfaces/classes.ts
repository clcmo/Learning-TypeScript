// Exemplo básico de classe em TypeScript

class Animal {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }
    
    fazerSom(): void {
        console.log(this.nome + " está fazendo um som.")
    }
}

let cachorro = new Animal("Rex")
cachorro.fazerSom()


// Exemplo de classe genérica em TypeScript

class Caixa<T> {
    private conteudo: T

    constructor(conteudo: T) {
        this.conteudo = conteudo
    }

    getConteudo(): T {
        return this.conteudo
    }

}

let caixaDeNumeros = new Caixa<number>(123)
console.log("Conteúdo da caixa de números: " + caixaDeNumeros.getConteudo())

let caixaDeStrings = new Caixa<string>("Olá, TypeScript!")
console.log("Conteúdo da caixa de strings: " + caixaDeStrings.getConteudo())

// Exemplo de classe singleton em TypeScript

class Configuracao {
    private static instancia: Configuracao
    private constructor(public url: string, public porta: number) {}

    static getInstancia(): Configuracao {
        if (!Configuracao.instancia) {
            Configuracao.instancia = new Configuracao("localhost", 8080)
        }
        return Configuracao.instancia
    }
}

let config1 = Configuracao.getInstancia()
console.log(`Configuração 1: ${config1.url}:${config1.porta}`)

let config2 = Configuracao.getInstancia()
console.log(`Configuração 2: ${config2.url}:${config2.porta}`)

console.log("As duas configurações são a mesma instância: " + (config1 === config2))

// Exemplo de mixins em TypeScript

type Constructor<T = {}> = new (...args: any[]) => T

function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        timestamp = new Date()
    }
}

class Documento {
    titulo: string

    constructor(titulo: string) {
        this.titulo = titulo
    }

    exibirTitulo(): void {
        console.log("Título: " + this.titulo)
    }
}

const DocumentoTimestamped = Timestamped(Documento)

let doc = new DocumentoTimestamped("Meu Documento")
doc.exibirTitulo()
console.log("Timestamp: " + doc.timestamp)

// Exemplo de classe com métodos encadeados em TypeScript

class Builder {
    private resultado: string = ""
    
    adicionarTexto(texto: string): this {
        this.resultado += texto
        return this
    }

    adicionarQuebraDeLinha(): this {
        this.resultado += "\n"
        return this
    }

    construir(): string {
        return this.resultado
    }
}

let builder = new Builder()
let textoFinal = builder.adicionarTexto("Linha 1")
    .adicionarQuebraDeLinha()
    .adicionarTexto("Linha 2")
    .construir()

console.log("Texto construído:\n" + textoFinal)

// Exemplo de classe com decoradores em TypeScript