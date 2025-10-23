// Exemplo de modificadores de acesso em TypeScript

class Pessoa {
    private nome: string
    protected idade: number
    public cidade: string

    constructor(nome: string, idade: number, cidade: string) {
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }

    public apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`)
    }

}

let pessoa = new Pessoa("Ana", 30, "São Paulo")
pessoa.apresentar()
// pessoa.nome // Erro: 'nome' é privado
// console.log(pessoa.idade) // Erro: 'idade' é protegida
console.log(pessoa.cidade) // Válido: 'cidade' é público