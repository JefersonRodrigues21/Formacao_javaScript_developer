
const numero = 5;
const numeroDivisivelPor5 = (numero % 2) === 0;

if (numero === 0){
    console.log("O número é inválido");
} else if (numero === 5){
    console.log("O número é inválido");
} else if (numeroDivisivelPor5){
    console.log("Sim");
} else {
    console.log("Não");
}