const contaBancaria = {
  nome: 'Maria',
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor;
    this.historicos.push({
      tipo: 'Depósito',
      valor: valor,
    });
    console.log(
      `Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}`
    );
  },
  sacar: function (valor) {},
};

contaBancaria.depositar(10000);
