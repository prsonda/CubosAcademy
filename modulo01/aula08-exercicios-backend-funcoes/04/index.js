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
      `Deposito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${
        this.nome
      }`
    );
  },
  sacar: function (valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
    } else {
      this.saldo -= valor;
      this.historicos.push({
        tipo: 'Saque',
        valor: valor,
      });
      console.log(
        `Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${
          this.nome
        }`
      );
    }
  },
  calculaHistorico: function () {
    let deposito = 0;
    let saque = 0;

    for (item of this.historicos) {
      if (item.tipo === 'Depósito') {
        deposito += item.valor;
      }

      if (item.tipo === 'Saque') {
        saque += item.valor;
      }
    }

    console.log(`Depósito de $${deposito / 100}`);
    console.log(`Saque de $${saque / 100}`);
  },
  extrato: function () {
    console.log(
      `Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}`
    );
    console.log('Histórico:');
    this.calculaHistorico();
  },
};

contaBancaria.depositar(10000);
contaBancaria.sacar(3000);
contaBancaria.extrato();
