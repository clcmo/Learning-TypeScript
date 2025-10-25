/** 3. Criar uma função que receba dois números e retorne a soma */
function somar(num1: number, num2: number): number {
    return num1 + num2
}

console.log(`Soma: ${somar(5, 10)}`)

/** 5. Criar uma função que receba um array de números e retorne o maior número */
function encontrarMaiorNumero(numeros: number[]): number {
    return Math.max(...numeros)
}

console.log(`Maior número: ${encontrarMaiorNumero([3, 7, 2, 9, 5])}`)

/** 7. Criar uma função que receba um número e retorne se é par ou ímpar */
function verificarParOuImpar(numero: number): string {
    return numero % 2 === 0 ? "Par" : "Ímpar"
}

console.log(`O número 4 é: ${verificarParOuImpar(4)}`)
console.log(`O número 7 é: ${verificarParOuImpar(7)}`)
