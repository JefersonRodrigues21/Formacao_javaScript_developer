/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
Utilize a tabela a seguir, para ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

Condição de pagamento:
    - À vista Débito, 10% de desconto;
    - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    - Em 2x preço normal de etiqueta sem juros;
    - Acima de 2x, preço normal de etiqueta + juros de 10%.
    */

    const precoEtiqueta = 1000;
    const formaPagamento = '3x';

    // const debito = precoEtiqueta + (precoEtiqueta * 10 /100);

    if (formaPagamento === 'debito') {
        console.log('O valor a ser pago será de R$', precoEtiqueta - (precoEtiqueta * 10 / 100), 'Reais');
    } else if ((formaPagamento === 'dinheiro') ||(formaPagamento === 'pix')){
        console.log('O valor a ser pago será de R$', precoEtiqueta - (precoEtiqueta * 15 / 100), 'Reais');
    } else if (formaPagamento === "parcelado 2x"){
        console.log('O valor a ser pago será de R$', precoEtiqueta, 'Reais');
    } else {
        console.log('O valor a ser pago será de R$', precoEtiqueta + (precoEtiqueta * 10 / 100), 'Reais');
    }