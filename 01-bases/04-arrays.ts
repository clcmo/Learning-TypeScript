// Arrays com tipos específicos
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["Ana", "Bruno", "Carla"];

// Adicionando elementos
numeros.push(6);
nomes.push("Daniel");

// Acessando elementos
console.log(numeros[0]); // 1
console.log(nomes[1]);   // Bruno

// Iterando sobre arrays
numeros.forEach((num) => console.log(num));
nomes.forEach((nome) => console.log(nome));

// Arrays multidimensionais
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][2]); // 6

// Array com tipos mistos usando tuplas
let tupla: [number, string, boolean] = [1, "Teste", true];
console.log(tupla[0]);
console.log(tupla[1]);
console.log(tupla[2]);

// Array com tipo genérico
let generico: Array<number> = [10, 20, 30];
generico.push(40);
console.log(generico);

// Função que retorna um array de strings
function criarArrayDeStrings(...itens: string[]): string[] {
  return itens;
}

let arrayDeStrings = criarArrayDeStrings("um", "dois", "três");
console.log(arrayDeStrings);

// Filtrando um array
let numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares); // [2, 4, 6]

// Mapeando um array
let numerosMultiplicados = numeros.map((num) => num * 2);
console.log(numerosMultiplicados); // [2, 4, 6, 8, 10, 12]

// Reduzindo um array
let soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma); // 21

// Verificando se todos os números são maiores que 0
let todosMaioresQueZero = numeros.every((num) => num > 0);
console.log(todosMaioresQueZero); // true

// Verificando se existe algum número maior que 4
let algumMaiorQueQuatro = numeros.some((num) => num > 4);
console.log(algumMaiorQueQuatro); // true

// Encontrando um número específico
let encontrado = numeros.find((num) => num === 3);
console.log(encontrado); // 3

// Encontrando o índice de um número específico
let indice = numeros.findIndex((num) => num === 4);
console.log(indice); // 3

// Ordenando um array de números
let numerosDesordenados: number[] = [5, 2, 8, 1, 4];
numerosDesordenados.sort((a, b) => a - b);
console.log(numerosDesordenados); // [1, 2, 4, 5, 8]

// Revertendo um array
numerosDesordenados.reverse();
console.log(numerosDesordenados); // [8, 5, 4, 2, 1]

// Concatenando dois arrays
let maisNumeros: number[] = [7, 8, 9];
let todosNumeros = numeros.concat(maisNumeros);
console.log(todosNumeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Dividindo um array em partes menores (slicing)
let parteNumeros = todosNumeros.slice(2, 5);
console.log(parteNumeros); // [3, 4, 5]

// Juntando elementos de um array em uma string
let nomesJuntos = nomes.join(", ");
console.log(nomesJuntos); // Ana, Bruno, Carla, Daniel

// Removendo o último elemento de um array
let ultimoNumero = numeros.pop();
console.log(ultimoNumero); // 6
console.log(numeros); // [1, 2, 3, 4, 5]

// Removendo o primeiro elemento de um array
let primeiroNome = nomes.shift();
console.log(primeiroNome); // Ana
console.log(nomes); // [Bruno, Carla, Daniel]

// Adicionando um elemento no início do array
numeros.unshift(0);
console.log(numeros); // [0, 1, 2, 3, 4, 5]

// Encontrando o tamanho do array
console.log(numeros.length); // 6
console.log(nomes.length);   // 3

// Limpando um array
numeros = [];
console.log(numeros); // []
nomes = [];
console.log(nomes);   // []

// Fim do arquivo arrays.ts