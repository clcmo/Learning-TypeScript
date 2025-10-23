// Entendento as Constantes em TypeScript

// Em TypeScript, uma constante é uma variável cujo valor não pode ser alterado após sua atribuição inicial.
// As constantes são declaradas usando a palavra-chave 'const'.

const pi: number = 3.14159;
const linguagem: string = "TypeScript";
const isAtivo: boolean = true;

// Tentando alterar o valor de uma constante resultará em um erro de compilação.
// pi = 3.14; // Erro: Cannot assign to 'pi' because it is a constant.

// As constantes são úteis para valores que não devem mudar durante a execução do programa,
// como valores matemáticos, configurações fixas, etc.

console.log(`O valor de pi é ${pi}`);
console.log(`Bem-vindo ao ${linguagem}`);
console.log(`O status está ativo? ${isAtivo}`);

// Constantes também podem ser usadas em expressões e funções.
const raio: number = 5;
const area: number = pi * raio * raio;

console.log(`A área do círculo com raio ${raio} é ${area}`);

// Resumo:
// - Use 'const' para declarar constantes em TypeScript.
// - O valor de uma constante não pode ser alterado após a atribuição inicial.
// - Constantes são úteis para valores fixos que não devem mudar.

// Exemplo adicional:
//const pi = 3.14
console.log(pi)

// pi = 3.1415 // Isso causará um erro, pois 'pi' é uma constante
