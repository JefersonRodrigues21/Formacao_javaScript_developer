/* - Crie uma classe para representar pessoa.
   - Para cada pessoa teremos os atributos, NOME, PESO e ALTURA.
   - As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = PESO * (ALTURA*ALTURA)
   - Instacie uma pessoa chamada josé que tenha 70kg e altura de 1.75 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){ /*MÉTODO*/
        return this.peso / (this.altura * this.altura);
    }
    classicarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return('Abaixo do Peso');
        } else if (imc <= 25) {
            return('Peso Normal');
        } else if (imc <= 30){
            return('Acima do Peso');
        } else if (imc <= 40){
            return('Obeso');
        } else {
            return('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('Jose', 100, 1.75);
console.log(jose.classicarImc());
const ticyane = new Pessoa('Ticyane', 60, 1.6);
console.log(ticyane.classicarImc());