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
};

carro.ligar();
carro.desligar();
