//Operadores matemáticos em TypeScript

function soma(a: number, b: number): number {
    return a + b
}

let resultado = soma(5, 10)
console.log("Resultado da soma:", resultado)

function subtracao(a: number, b: number): number {
    return a - b
}

resultado = subtracao(10, 5)
console.log("Resultado da subtração:", resultado)

function multiplicacao(a: number, b: number): number {
    return a * b
}

resultado = multiplicacao(5, 10)
console.log("Resultado da multiplicação:", resultado)

function divisao(a: number, b: number): number {
    return a / b
}

resultado = divisao(10, 2)
console.log("Resultado da divisão:", resultado)

function modulo(a: number, b: number): number {
    return a % b
}

resultado = modulo(10, 3)
console.log("Resultado do módulo:", resultado)

function incremento(a: number): number {
    return a + 1
}

let valor = 5
valor = incremento(valor)
console.log("Valor após incremento:", valor)

function decremento(a: number): number {
    return a - 1
}

valor = decremento(valor)
console.log("Valor após decremento:", valor)

function potencia(a: number, b: number): number {
    return a ** b
}

resultado = potencia(2, 3)
console.log("Resultado da potência:", resultado)

function raizQuadrada(a: number): number {
    return Math.sqrt(a)
}

resultado = raizQuadrada(16)
console.log("Resultado da raiz quadrada:", resultado)

function raizCubica(a: number): number {
    return Math.cbrt(a)
}

resultado = raizCubica(27)
console.log("Resultado da raiz cúbica:", resultado)

function arredondarParaCima(a: number): number {
    return Math.ceil(a)
}

resultado = arredondarParaCima(4.3)
console.log("Resultado do arredondamento para cima:", resultado)

function arredondarParaBaixo(a: number): number {
    return Math.floor(a)
}

resultado = arredondarParaBaixo(4.7)
console.log("Resultado do arredondamento para baixo:", resultado)

function valorAbsoluto(a: number): number {
    return Math.abs(a)
}

resultado = valorAbsoluto(-10)
console.log("Resultado do valor absoluto:", resultado)

function gerarNumeroAleatorio(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

resultado = gerarNumeroAleatorio(1, 100)
console.log("Número aleatório entre 1 e 100:", resultado)

//Fim dos operadores matemáticos em TypeScript
