const carro = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      console.log('Este carro já está ligado.');
    } else {
      this.ligado = true;
    }
  },
  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      this.velocidade = 0;
    } else {
      console.log('Este carro já está desligado.');
    }
  },
  acelerar: function () {
    if (this.ligado) {
      this.velocidade = 10;
    } else {
      console.log('Não é possível acelerar um carro desligado.');
    }
  },
  desacelerar: function () {
    if (this.ligado) {
      this.velocidade = -10;
    } else {
      console.log('Não é possível desacelerar um carro desligado.');
    }
  },
};

carro.ligar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
