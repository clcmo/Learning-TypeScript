/**
 * Tuplas em TypeScript
 * 
 * Tuplas são arrays com um número fixo de elementos, onde cada elemento pode ter um tipo diferente.
 * Elas são úteis quando você quer representar um conjunto de valores relacionados, mas com tipos distintos.
 * 
 * Sumário:
 * * 1. Definição de Tuplas
 *   - Sintaxe para definir uma tupla com tipos específicos.
 * * 2. Acesso a Elementos da Tupla
 *  - Como acessar elementos individuais da tupla.
 * * 3. Adição de Elementos (com cuidado)
 * - Adicionar elementos a uma tupla, mas com atenção às limitações.
 * * 4. Limitações e Considerações
 * - Discussão sobre as limitações das tuplas em TypeScript.
 * 
 * Autor: Camila
 * Data: 2025-10-23
 * Licença: MIT
 */

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