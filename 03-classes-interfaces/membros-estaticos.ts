// Exemplo de membros estáticos em TypeScript

class Matematica {
    static PI: number = 3.14159
    
    static calcularCircunferencia(raio: number): number {
        return 2 * Matematica.PI * raio
    }

}

console.log("Valor de PI: " + Matematica.PI)
console.log("Circunferência com raio 5: " + Matematica.calcularCircunferencia(5))

