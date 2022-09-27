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
  calcularDesconto: function () {
    return desconto;
  },
  addProduto: function (produto) {
    let encontrado = false;
    for (prod of this.produtos) {
      let codigo = prod.id;
      if (produto.id === codigo) {
        encontrado = true;
        prod.qtd += produto.qtd;
      }
    }
    if (!encontrado) {
      carrinho.produtos.push(produto);
    }
  },
  imprimirDetalhes: function () {
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log();
    for (item of this.produtos) {
      console.log(
        `Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${(
          item.precoUnit / 100
        ).toFixed(2)}`
      );
    }
    console.log();
    console.log(`Total de itens: ${this.calcula()[1]} itens`);
    console.log(`Total a pagar: R$ ${this.calcula()[0].toFixed(2)}`);
  },
  imprimirResumo: function () {
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${this.calcula()[1]} itens`);
    console.log(`Total a pagar: R$ ${this.calcula()[0].toFixed(2)}`);
  },
};

const novaBermuda = {
  id: 2,
  nome: 'Bermuda',
  qtd: 3,
  precoUnit: 5000,
};

carrinho.addProduto(novaBermuda);

const novoTenis = {
  id: 3,
  nome: 'Tenis',
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes();
