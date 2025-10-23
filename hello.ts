console.log("Olá")

var nome = "Camila"
let local = "ETEC"
console.log(nome)
console.log(local)

local = "Faculdade"
console.log(local)

const pi = 3.14
console.log(pi)

// pi = 3.1415 // Isso causará um erro, pois 'pi' é uma constante

function saudacao(): void {
    console.log("Bem-vindo ao TypeScript!")
}

saudacao()

function soma(a: number, b: number): number {
    return a + b
}

let resultado = soma(5, 10)
console.log("Resultado da soma:", resultado)

interface Pessoa {
    nome: string
    idade: number
}

let pessoa: Pessoa = {
    nome: "João",
    idade: 25
}

console.log("Nome da pessoa:", pessoa.nome)
console.log("Idade da pessoa:", pessoa.idade)

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

enum Cores {
    Vermelho,
    Verde,
    Azul
}

let minhaCor: Cores = Cores.Verde
console.log("Minha cor favorita é:", Cores[minhaCor])

// Função assíncrona com Promise
async function buscarDados(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados buscados com sucesso!")
        }, 2000)
    })
}

buscarDados().then((mensagem) => {
    console.log(mensagem)
})

// Uso de tuplas
let tupla: [number, string] = [1, "um"]
console.log("Tupla:", tupla)

// Uso de union types
let valor: number | string
valor = 42
console.log("Valor como número:", valor)
valor = "quarenta e dois"
console.log("Valor como string:", valor)

// Uso de tipos genéricos
function identidade<T>(arg: T): T {
    return arg
}

let numeroIdentidade = identidade<number>(100)
let stringIdentidade = identidade<string>("TypeScript")

console.log("Identidade número:", numeroIdentidade)
console.log("Identidade string:", stringIdentidade)

// Fim do código