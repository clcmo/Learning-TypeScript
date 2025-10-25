/**
 * Exemplos práticos sobre variáveis em TypeScript
 * Sumário:
 * 1. Utilizando tipos explícitos para garantir segurança e clareza no código.
 * 1.1. Tipos básicos: string, number, boolean, array, object.
 * 2. Funções com tipos de parâmetros e retorno.
 * 3. Introdução às interfaces para definir a estrutura de objetos.
 * Descrição: Este código demonstra como declarar variáveis com tipos explícitos em TypeScript,
 * definir funções com tipos de parâmetros e retorno, e utilizar interfaces para estruturar objetos.
 */

/** 1. Declaração de variáveis com tipos explícitos */
let nome: string = "João";
let idade: number = 30;
let isEstudante: boolean = true;
let notas: number[] = [8.5, 9.0, 7.5];

/** 2. Função com tipos de parâmetros e retorno */
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

// Uso da função
console.log(saudacao("Carlos"));

/** 3. Introdução às interfaces para definir a estrutura de objetos.
 * Ver mais detalhes na aula sobre Interfaces */ 
interface Pessoa {
    nome: string;
    idade: number;
    profissao?: string; // Propriedade opcional
}

let pessoa1: Pessoa = {
    nome: "Lucas",
    idade: 28,
    profissao: "Engenheiro"
};

let pessoa2: Pessoa = {
    nome: "Ana",
    idade: 22
};

// Exibindo informações das pessoas
console.log(pessoa1);
console.log(pessoa2);
