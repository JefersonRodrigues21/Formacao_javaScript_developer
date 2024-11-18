// Métodos para objeto

const pessoa = {
    nome: 'Jeferson Rodrigues',
    idade: 37,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

// pessoa.nome = 'Dione';
// pessoa.idade = 30;
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)    
};
pessoa.descrever();

//Meu nome é Jeferson Rodrigues e minha idade é 37 anos.
    //pessoa.descrever();

//Meu nome é Dione e minha idade é 30 anos.
    // pessoa.nome = 'Dione';
    // pessoa.idade = 30;

//Meu nome é Jeferson Rodrigues e minha idade é 37 anos.
    // pessoa.descrever = function () {
    //     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)    
    // };