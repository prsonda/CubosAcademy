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
    let maisBarato = 999999999999999;
    let desconto = 0;

    for (item of carrinho.produtos) {
      if (item.precoUnit < maisBarato) {
        maisBarato = item.precoUnit;
      }
    }

    if (this.calcula()[0] > 10000 || this.calcula()[1] > 4) {
      const desconto1 = this.calcula()[0] * 0.1;
      const desconto2 = maisBarato;

      if (desconto1 > desconto2) {
        desconto = desconto1 / 100;
      } else {
        desconto = desconto2 / 100;
      }
    }

    return desconto;
  },
  totalAPagar: function () {
    const valorPagar = (this.calcula()[0] - this.calcularDesconto()).toFixed(2);
    return valorPagar;
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
    console.log(`Total de desconto: R$ ${this.calcularDesconto().toFixed(2)}`);
    console.log(`Total a pagar: R$ ${this.totalAPagar()}`);
  },
  imprimirResumo: function () {
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${this.calcula()[1]} itens`);
    console.log(`Total de desconto: R$ ${this.calcularDesconto().toFixed(2)}`);
    console.log(`Total a pagar: R$ ${this.totalAPagar}`);
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
