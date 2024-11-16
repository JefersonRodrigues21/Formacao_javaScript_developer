// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variaveis, são elas:
//     1 - Preço do etanol;
//     2 - Preço da gasalina;
//     3 - O tipo de combustível que está no seu carro;
//     4 - Gasto médio de combustível por km;
//     5 - Distância em km da viagem.
// Imprima o valor que será gasto na viagem.

const precoEtanol = 4.66;
const precoGasolina = 5.65;
const tipoCombustivel = 'Gasolina'; // escolha o tipo
const gastoCombustivelPorKm = 10;
const distanciaViagem = 100;

const litrosConsumidos = distanciaViagem / gastoCombustivelPorKm;

if (tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('O valor gasto na viagem será de ' + valorGasto.toFixed(2) + ' Reais.');
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('O valor gasto na viagem será de ' + valorGasto.toFixed(2) + ' Reais.');
}