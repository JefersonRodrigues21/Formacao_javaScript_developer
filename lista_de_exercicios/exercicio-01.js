/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme tabela abaixo:

Media = (nota 1 + nota 2 + nota 3) / 3

Classificação:
    -Media menor que 5, reprovado;
    -Media entre 5 e 7, recuperação;
    -Media acuma de 7, passou de semestre.
*/

const nota1 = 7.5;
const nota2 = 7.5;
const nota3 = 7.5;

const media = (nota1 + nota2 + nota3) / 3;

console.log('Nota', media.toFixed(2));

if (media < 5) {
    console.log('Reprovado');
} else if (media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passaou de Semestre!!!');
}