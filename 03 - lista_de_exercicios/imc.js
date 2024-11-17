/*O IMC - é um critério da organização mundial de saúde para dar uma indição sobre a condição de peso de uma pessoa adulta.

Fórmula:
IMC = PESO / (ALTURA * ALTURA)

Elabore um algoritmo que dado o peso e altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

Condição IMC:
    - Abaixo de 18.5 = ABAIXO DO PESO;
    - Entre 18.5 e 25 = PESO NORMAL;
    - Entre 25 e 30 = ACIMA DO PESO;
    - Entre 30 e 40 = OBESO;
    - Acima 40 = OBESIDADE GRAVE.
*/
const peso = 35;
const altura = 1.5;

const formula = peso / (altura * altura); // = peso / math.pow(altura, 2);

console.log(formula.toFixed(2));

if (formula < 18.5) {
    console.log('Abaixo do Peso');
} else if (formula <= 25) {
    console.log('Peso Normal');
} else if (formula <= 30){
    console.log('Acima do Peso');
} else if (formula <= 40){
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}