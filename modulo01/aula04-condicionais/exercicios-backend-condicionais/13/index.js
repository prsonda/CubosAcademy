//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = 'credito';

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

const credito = 0.05;
const cheque = 0.03;
const dinheiro = 0.1;
const debito = 0.1;

if (tipoDePagamento === 'credito') {
  let valorFinal = ((valorDoProduto - valorDoProduto * credito) / 100).toFixed(
    2
  );
  console.log(`Valor a ser pago: R$${valorFinal}`);
} else if (tipoDePagamento === 'cheque') {
  let valorFinal = ((valorDoProduto - valorDoProduto * cheque) / 100).toFixed(
    2
  );
  console.log(`Valor a ser pago: R$${valorFinal}`);
} else if (tipoDePagamento === 'dinheiro') {
  let valorFinal = ((valorDoProduto - valorDoProduto * dinheiro) / 100).toFixed(
    2
  );
  console.log(`Valor a ser pago: R$${valorFinal}`);
} else if (tipoDePagamento === 'debito') {
  let valorFinal = ((valorDoProduto - valorDoProduto * debito) / 100).toFixed(
    2
  );
  console.log(`Valor a ser pago: R$${valorFinal}`);
}
