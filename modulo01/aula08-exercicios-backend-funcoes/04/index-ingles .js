const bankAccount = {
  name: 'Maria',
  balance: 0,
  historical: [],
  deposit: function (value) {
    this.balance += value;

    this.historical.push({
      type: 'Depósito',

      value: value,
    });

    console.log(
      `Deposito de R$${(value / 100).toFixed(2)} realizado para o cliente: ${
        this.name
      }`
    );
  },
  drawOut: function (value) {
    if (value > this.balance) {
      console.log(`Saldo insuficiente para o saque de: ${this.name}`);
    } else {
      this.balance -= value;

      this.historical.push({
        type: 'Saque',

        value: value,
      });

      console.log(
        `Saque de R$${(value / 100).toFixed(2)} realizado para o cliente: ${
          this.name
        }`
      );
    }
  },
  calculateHistory: function () {
    let deposit = 0;
    let drawOut = 0;

    for (item of this.historical) {
      if (item.type === 'Depósito') {
        deposit += item.value;
      }

      if (item.type === 'Saque') {
        drawOut += item.value;
      }
    }

    console.log(`Depósito de $${(deposit / 100).toFixed(2)}`);
    console.log(`Saque de $${(drawOut / 100).toFixed(2)}`);
  },
  extract: function () {
    console.log(
      `Extrato de ${this.name} - Saldo: R$${(this.balance / 100).toFixed(2)}`
    );
    console.log('Histórico:');
    this.calculateHistory();
  },
};

bankAccount.deposit(10000);
bankAccount.drawOut(50000);
bankAccount.drawOut(5000);
bankAccount.extract();
