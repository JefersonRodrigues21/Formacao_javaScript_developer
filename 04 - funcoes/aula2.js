function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do Peso';
  } else if (imc <= 25) {
    return 'Peso Normal';
  } else if (imc <= 30) {
    return 'Acima do Peso';
  } else if (imc <= 40) {
    return 'Obeso';
  } else {
    return 'Obesidade Grave';
  }
}

(function main() {
  const peso = 74.7;
  const altura = 1.69;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc.toFixed(2)));
})();
