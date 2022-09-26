const carro = {
  ligado: false,
  velocidade: 0,
  mesagemLigadoDesligado: function () {
    if (this.ligado) {
      console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
    } else {
      console.log(`Carro desligado. Velocidade: ${this.velocidade}.`);
    }
  },
  ligar: function () {
    if (this.ligado) {
      console.log('Este carro já está ligado.');
    } else {
      this.ligado = true;
      this.mesagemLigadoDesligado();
    }
  },
  desligar: function () {
    if (this.ligado) {
      if (this.velocidade === 0) {
        this.ligado = false;
        this.mesagemLigadoDesligado();
      } else {
        console.log(
          `Não é possível desligar o carro em movimento. Velocidade: ${this.velocidade}.`
        );
      }
    } else {
      console.log('Este carro já está desligado.');
    }
  },
  acelerar: function () {
    if (this.ligado) {
      this.velocidade += 10;
      this.mesagemLigadoDesligado();
    } else {
      console.log('Não é possível acelerar um carro desligado.');
    }
  },
  desacelerar: function () {
    if (this.ligado) {
      if (this.velocidade >= 10) {
        this.velocidade += -10;
        this.mesagemLigadoDesligado();
      } else {
        console.log(
          `Não é possível desacelerar um carro parado: ${this.velocidade}.`
        );
      }
    } else {
      console.log('Não é possível desacelerar um carro desligado.');
    }
  },
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
carro.desacelerar();
carro.desligar();
