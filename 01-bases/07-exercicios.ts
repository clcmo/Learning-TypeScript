/** 
 * Atividades para os alunos praticarem os conceitos básicos de TypeScript
 * Utilizando Strings: 
 * 1. Exibir informações simples de uma professora 
 * 2. Criar variáveis para armazenar dados de um carro
 * 3. Criar uma função que receba uma string e retorne o número de caracteres
 * 4. Criar uma função que receba um array de strings e retorne uma única string concatenada
 * 5. Criar uma função que receba um objeto com informações de uma pessoa e retorne o nome completo
 */

/** 1. Exibir informações simples de uma professora */
let nomeProfessora: string = "Ana Maria"
let idadeProfessora: number = 35
let disciplinaProfessora: string = "Matemática"

console.log(`Professora: ${nomeProfessora}, Idade: ${idadeProfessora}, Disciplina: ${disciplinaProfessora}`)

/** 2. Criar variáveis para armazenar dados de um carro */
let marca: string = "Toyota"
let modelo: string = "Corolla"
let ano: number = 2020
let isNovo: boolean = true

console.log(`Carro: ${marca} ${modelo}, Ano: ${ano}, Novo: ${isNovo}`)

/** 3. Criar uma função que receba uma string e retorne o número de caracteres */
function contarCaracteres(texto: string): number {
    return texto.length
}

console.log(`Número de caracteres: ${contarCaracteres("Hello, World!")}`)

/** 4. Criar uma função que receba um array de strings e retorne uma única string concatenada */
function concatenarStrings(strings: string[]): string {
    return strings.join(" ")
}

console.log(`Strings concatenadas: ${concatenarStrings(["TypeScript", "é", "incrível!"])}`)


/** 5. Criar uma função que receba um objeto com informações de uma pessoa e retorne o nome completo */
interface Pessoa {
    nome: string
    sobrenome: string
}

function obterNomeCompleto(pessoa: Pessoa): string {
    return `${pessoa.nome} ${pessoa.sobrenome}`
}

const pessoaExemplo: Pessoa = { nome: "João", sobrenome: "Silva" }
console.log(`Nome completo: ${obterNomeCompleto(pessoaExemplo)}`)
