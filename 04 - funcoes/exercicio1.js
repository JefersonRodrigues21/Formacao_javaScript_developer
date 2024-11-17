/*function escrevaNome (nome){
    console.log('Meu nome é ' + nome);
}
escrevaNome('Jeferson.')

function escrevaIdade (idade){
    if (idade >= 18){
        console.log("Maior de idade, " + idade + ' anos.');
    } else {
        console.log("Menor de idade, " + idade + ' anos.');
    }
}
escrevaIdade(37);*/
//-----------------OU---------VERSÃO 2-----------------------------------

function escrevaNome (nome){
    return('Meu nome é ' + nome);
}
escrevaNome('Jeferson.')

function escrevaIdade (idade){
    if (idade >= 18){
        console.log(escrevaNome('Jeferson, ') + 'Maior de idade, ' + idade + ' anos.');
    } else {
        console.log("Menor de idade, " + idade + ' anos.');
    }
}
escrevaIdade(37);