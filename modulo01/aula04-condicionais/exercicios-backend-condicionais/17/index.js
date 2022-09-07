//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if (valorPago < valorDoProduto / 100) {
  const faltaPagar = valorDoProduto / 100 - valorPago;
  const valorParcela = valorDoProduto / quantidadeDoParcelamento / 100;
  const parcelasRestantes = faltaPagar / valorParcela;
  console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcela}`);
}
