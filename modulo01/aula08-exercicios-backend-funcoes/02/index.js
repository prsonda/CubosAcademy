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
};

carro.ligar();
