/* 
- Crie uma classe para representar carros.
- Os carros possuem uma marca, cor e gasto médio de combutível por km rodado.
- Crie um método que dado a quantidade e o preço do combustível nos dês o valor
gasto em reais para realizar este percurso.*/ 

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
}

const etios = new Carro('Toyota', 'Preto', 1/8.5);

console.log(etios);