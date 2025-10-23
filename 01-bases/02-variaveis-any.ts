// Variável com tipo any (pode receber qualquer tipo)
let qualquerCoisa: any = "Pode ser uma string";
qualquerCoisa = 42; // Agora é um número

console.log(qualquerCoisa); // Saída: 42

qualquerCoisa = { chave: "valor" };
console.log(qualquerCoisa); // Saída: { chave: 'valor' }

// Uso de any em arrays
let lista: any[] = [1, "dois", true];
lista.push({ novo: "objeto" });

console.log(lista); // Saída: [ 1, 'dois', true, { novo: 'objeto' } ]

// Função que retorna any
function retornarQualquerCoisa(): any {
    return "Uma string qualquer";
}

const resultado = retornarQualquerCoisa();
console.log(resultado); // Saída: Uma string qualquer

// Evitar o uso excessivo de any para manter a segurança de tipos
// Exemplo de uso inadequado de any
function somar(a: any, b: any): any {
    return a + b; // Pode causar erros em tempo de execução
}

console.log(somar(5, "10")); // Saída: 510 (concatenação de string)

// Melhor prática: usar tipos específicos sempre que possível
function somarNumeros(a: number, b: number): number {
    return a + b;
}

console.log(somarNumeros(5, 10)); // Saída: 15

// Fim do arquivo variaveis-any.ts