// Entendendo sobre Variaveis em TypeScript

// Declaração de variáveis com tipos explícitos
let nome: string = "João";
let idade: number = 30;
let isEstudante: boolean = true;
let notas: number[] = [8.5, 9.0, 7.5];

// Função com tipos de parâmetros e retorno
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

// Uso da função
console.log(saudacao("Carlos"));

// Objetos com tipos definidos
// Ver na aula sobre Interfaces (mais detalhes)
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


/** Atividade: 
 * 1. Exibir informações simples de uma professora */
var professora = "Camila"
let local = "ETEC"
console.log(nome)
console.log(local)

local = "Faculdade"
console.log(local)

