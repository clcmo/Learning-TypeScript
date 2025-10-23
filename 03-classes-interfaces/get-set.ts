
// Exemplo de getters e setters em TypeScript

class ContaBancaria {
    private _saldo: number

    constructor(saldoInicial: number) {
        this._saldo = saldoInicial
    }

    get saldo(): number {
        return this._saldo
    }

    set saldo(valor: number) {
        if (valor >= 0) {
            this._saldo = valor
        } else {
            console.log("Saldo não pode ser negativo.")
        }
    }
    
}

let minhaConta = new ContaBancaria(1000)
console.log("Saldo inicial: " + minhaConta.saldo)
minhaConta.saldo = 500
console.log("Saldo atualizado: " + minhaConta.saldo)
minhaConta.saldo = -200 // Tenta definir um saldo negativo

console.log("Saldo final: " + minhaConta.saldo)