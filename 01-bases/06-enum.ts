// Enumeração
enum Cores {
    Vermelho,
    Verde,
    Azul
}

let corSelecionada: Cores = Cores.Verde;
console.log("Minha cor favorita é:", Cores[corSelecionada])

// Enumeração com valores personalizados
enum Status {
    Ativo = 1,
    Inativo = 0,
    Pendente = 2
}

let statusUsuario: Status = Status.Ativo;
console.log("Status do usuário:", statusUsuario)

// Enumeração com strings

enum Direcao {
    Norte = "NORTE",
    Sul = "SUL",
    Leste = "LESTE",
    Oeste = "OESTE"
}

let direcaoAtual: Direcao = Direcao.Norte;
console.log("Direção atual:", direcaoAtual)

// Usando enumeração em uma função

function obterMensagemDirecao(direcao: Direcao): string {
    switch (direcao) {
        case Direcao.Norte:
            return "Você está indo para o Norte.";
        case Direcao.Sul:
            return "Você está indo para o Sul.";
        case Direcao.Leste:
            return "Você está indo para o Leste.";
        case Direcao.Oeste:
            return "Você está indo para o Oeste.";
        default:
            return "Direção desconhecida.";
    }
}

console.log(obterMensagemDirecao(Direcao.Leste));

// Enumeração com bitwise
enum Permissoes {
    Leitura = 1 << 0,  // 1
    Escrita = 1 << 1,  // 2
    Executar = 1 << 2  // 4
}

let minhasPermissoes: number = Permissoes.Leitura | Permissoes.Escrita;

function temPermissao(permissoes: number, permissao: Permissoes): boolean {
    return (permissoes & permissao) === permissao;
}

console.log("Tem permissão de leitura?", temPermissao(minhasPermissoes, Permissoes.Leitura));
console.log("Tem permissão de executar?", temPermissao(minhasPermissoes, Permissoes.Executar));

// Enumeração const
const enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

let diaHoje: DiasDaSemana = DiasDaSemana.Sexta;
console.log("Hoje é dia:", DiasDaSemana[diaHoje]);

// Fim do arquivo enum.ts