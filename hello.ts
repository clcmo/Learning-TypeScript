/**
 * Arquivo de introdução ao TypeScript
 * Este arquivo sauda o usuário e demonstra alguns conceitos básicos do TypeScript,
 * como tipos, funções assíncronas, tuplas, union types e tipos genéricos.
 * 
 * Autor: Camila
 * Data: 2025-10-23
 * Licença: MIT
 * Versão: 1.0.0
 */

// Saudações ao usuário
console.log("Olá")


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