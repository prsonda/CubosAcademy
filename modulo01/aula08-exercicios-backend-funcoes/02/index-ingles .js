const car = {
  on: false,
  velocity: 0,
  messageOnOff: function () {
    if (this.on) {
      console.log(`Carro ligado. Velocidade: ${this.velocity}.`);
    } else {
      console.log(`Carro desligado. Velocidade: ${this.velocity}.`);
    }
  },
  connect: function () {
    if (this.on) {
      console.log('Este carro já está ligado.');
    } else {
      this.on = true;
      this.messageOnOff();
    }
  },
  disconnect: function () {
    if (this.on) {
      if (this.velocity === 0) {
        this.on = false;
        this.messageOnOff();
      } else {
        console.log(
          `Não é possível desligar o carro em movimento. Velocidade: ${this.velocity}.`
        );
      }
    } else {
      console.log('Este carro já está desligado.');
    }
  },
  speed: function () {
    if (this.on) {
      this.velocity += 10;
      this.messageOnOff();
    } else {
      console.log('Não é possível acelerar um carro desligado.');
    }
  },
  decelerate: function () {
    if (this.on) {
      if (this.velocity >= 10) {
        this.velocity += -10;
        this.messageOnOff();
      } else {
        console.log(
          `Não é possível desacelerar um carro parado: ${this.velocity}.`
        );
      }
    } else {
      console.log('Não é possível desacelerar um carro desligado.');
    }
  },
};

car.disconnect();
car.connect();
car.connect();
car.speed();
car.speed();
car.decelerate();
car.disconnect();
car.speed();
car.decelerate();
car.decelerate();
car.disconnect();
