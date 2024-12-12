
const notas = [];

notas.push(8);
notas.push(9.58);
notas.push(10);
notas.push(8.2);
notas.push(9.65);

let soma = 0;

for (let i = 0; i < notas.length; i++) { /*lista das notas; 1++ é soma mais 1 ou seja dá mais uma volta*/
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;

console.log(media.toFixed(2));