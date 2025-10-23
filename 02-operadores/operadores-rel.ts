// Operadores relacionais em TypeScript

let a: number = 10;
let b: number = 20;

// Operador maior que (>)
console.log(`${a} > ${b}:`, a > b); // false

// Operador menor que (<)
console.log(`${a} < ${b}:`, a < b); // true

// Operador maior ou igual a (>=)
console.log(`${a} >= ${b}:`, a >= b); // false
console.log(`${b} >= ${a}:`, b >= a); // true

// Operador menor ou igual a (<=)
console.log(`${a} <= ${b}:`, a <= b); // true
console.log(`${b} <= ${a}:`, b <= a); // false

// Operador de igualdade (==)
console.log(`${a} == ${b}:`, a == b); // false
console.log(`${a} == 10:`, a == 10); // true

// Operador de desigual
console.log(`${a} != ${b}:`, a != b); // true
console.log(`${a} != 10:`, a != 10); // false

// Operador de identidade (===)
console.log(`${a} === ${b}:`, a === b); // false
console.log(`${a} === 10:`, a === 10); // true

// Operador de não identidade (!==)
console.log(`${a} !== ${b}:`, a !== b); // true
console.log(`${a} !== 10:`, a !== 10); // false

// Comparação entre diferentes tipos
let c: any = "10";
console.log(`${a} == "${c}":`, a == c);
console.log(`${a} === "${c}":`, a === c);
console.log(`${a} != "${c}":`, a != c);
console.log(`${a} !== "${c}":`, a !== c);

// Fim do arquivo operadores-rel.ts