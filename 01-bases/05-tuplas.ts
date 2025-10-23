// Tuplas (array com tipos fixos em posições específicas)
let estudante: [string, number] = ["Maria", 25];

console.log(`Nome: ${estudante[0]}`);
console.log(`Idade: ${estudante[1]}`);

// Adicionando um novo elemento à tupla
estudante.push("Engenharia");
console.log(`Curso: ${estudante[2]}`);

// Acessando o novo elemento
console.log(`Curso adicionado: ${estudante[2]}`);

// Tentando acessar um índice fora do definido na tupla
// Isso não gera erro em tempo de compilação, mas pode causar problemas em tempo de execução
console.log(`Elemento fora da tupla: ${estudante[3]}`); // undefined
// Note que acessar estudante[3] não é seguro, pois a tupla foi definida para ter apenas dois elementos.
// Portanto, é importante ter cuidado ao manipular tuplas para evitar acessar índices inválidos.
// Fim do arquivo tuplas.ts