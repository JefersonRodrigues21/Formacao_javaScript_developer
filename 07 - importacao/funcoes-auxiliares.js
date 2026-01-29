
const entradas = [5, 50, 10, 98, 23]; // Array simulando entradas de dados
let i = 0; // Índice para controlar a posição no array de entradas

function gets() { // Simula a função gets, retornando um valor fixo
    const valor = entradas[i]; // Pega o valor na posição atual do índice
    i++;
    return valor; // Retorna o valor e incrementa o índice
}

function print(texto) { // Recebe um texto como parâmetro
    console.log(texto);
}


module.exports = { gets, print }; // Exportação das funções auxiliares