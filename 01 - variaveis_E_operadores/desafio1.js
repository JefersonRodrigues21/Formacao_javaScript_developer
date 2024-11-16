// Faça um program para calcular o valor de uma viagem.

// Voce terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por km;
// 3 - Distancia em km da viagem.

// Imprima no console o valor que será gasto para realizar esta viagem.

let valorCombustível = 5.79;
let gastoMedioCombustivelKm = 0.120;
let distanciaKmViagem = 1580;

const combustivelConsumido = distanciaKmViagem * gastoMedioCombustivelKm;
const valorViagem = combustivelConsumido * valorCombustível;

console.log('O valor a gastar pela viagem será de ' + valorViagem.toFixed(2));