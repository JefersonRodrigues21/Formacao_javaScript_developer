
let valorCombustível = 5.79;
let gastoMedioCombustivelKm = 0.120;
let distancia_Km_viagem = 1580;

const combustivelConsumido = distancia_Km_viagem * gastoMedioCombustivelKm;
const valorViagem = combustivelConsumido * valorCombustível;

console.log('O valor a gastar pela viagem será de ' + valorViagem.toFixed(2));