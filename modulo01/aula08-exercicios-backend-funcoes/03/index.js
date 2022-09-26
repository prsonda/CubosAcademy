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
  imprimirResumo: function () {
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${this.calcula()[1]} itens`);
    console.log(`Total a pagar: R$ ${this.calcula()[0].toFixed(2)}`);
  },
};

function addProdutoAoCarrinho(carrinho, produto) {
  let encontrado = false;
  for (prod of carrinho.produtos) {
    let codigo = prod.id;
    if (produto.id === codigo) {
      encontrado = true;
      prod.qtd += produto.qtd;
    }
  }
  if (!encontrado) {
    carrinho.produtos.push(produto);
  }
}

const novaBermuda = {
  id: 2,
  nome: 'Bermuda',
  qtd: 3,
  precoUnit: 5000,
};

addProdutoAoCarrinho(carrinho, novaBermuda);

const novoTenis = {
  id: 3,
  nome: 'Tenis',
  qtd: 1,
  precoUnit: 10000,
};

addProdutoAoCarrinho(carrinho, novoTenis);
carrinho.imprimirResumo();
