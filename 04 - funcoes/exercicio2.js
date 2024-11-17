
function aplicarDescontos (valor, desconto){
    return valor - (valor * 0.1);
}

function aplicarJuros (valor, juros){
    return valor - (valor * 0.1);
}

const precoEtiqueta = 100;
const formaPagamento = '3x';

// const debito = precoEtiqueta + (precoEtiqueta * 10 /100);

if (formaPagamento === 'debito') {
    console.log('O valor a ser pago será de R$', aplicarDescontos() - (precoEtiqueta * 0.1), 'Reais');
} else if ((formaPagamento === 'dinheiro') ||(formaPagamento === 'pix')){
    console.log('O valor a ser pago será de R$', precoEtiqueta - (precoEtiqueta * 0.15), 'Reais');
} else if (formaPagamento === "parcelado 2x"){
    console.log('O valor a ser pago será de R$', precoEtiqueta, 'Reais');
} else {
    console.log('O valor a ser pago será de R$', precoEtiqueta + (precoEtiqueta * 0.1), 'Reais');
}