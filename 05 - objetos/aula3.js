class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome= nome;
        this.idade= idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa('Vitor Guerra', 25);
const renan = new Pessoa('Renan Paula', 30);
const jeferson = new Pessoa('Jeferson Rodrigues', 37);

console.log(jeferson, renan, vitor);