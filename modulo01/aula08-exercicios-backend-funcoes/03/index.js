const carrinho = {
  nomeDoCliente: 'Guido Bernal',
  produtos: [
    {
      id: 1,
      nome: 'Camisa',
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: 'Bermuda',
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  calcula: function () {
    let somaItens = 0;
    let valorTotal = 0;
    for (item of carrinho.produtos) {
      if (item.precoUnit) {
        somaItens += item.qtd;
        valorTotal += (item.precoUnit * item.qtd) / 100;
      }
    }
    const resultado = [valorTotal, somaItens];
    return resultado;
  },
  imprimirResumoDoCarrinho: function () {
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${this.calcula()[1]} itens`);
    console.log(`Total a pagar: R$ ${this.calcula()[0].toFixed(2)}`);
  },
};

carrinho.imprimirResumoDoCarrinho();
