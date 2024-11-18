// ACESSANDO DINAMICAMENTE
const pessoa= {
    nome: 'Jeferson Rodrigues',
    idade: 37,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

console.log(pessoa['nome']);