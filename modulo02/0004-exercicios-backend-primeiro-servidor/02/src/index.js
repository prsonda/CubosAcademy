const express = require('express');

let minuto = 0;
let segundo = 50;

let temporizador;

let minutoEditado = minuto.toLocaleString('pt-br', {
  minimumIntegerDigits: 2,
  useGrouping: false,
});

let segundoEditado = segundo.toLocaleString('pt-br', {
  minimumIntegerDigits: 2,
  useGrouping: false,
});

const app = express();

app.get('/zerar', (req, res) => {
  clearInterval(temporizador);
  minuto = 0;
  segundo = 50;
  res.send('Cronômetro zerado!');
});

app.get('/', (req, res) => {
  res.send(
    `Tempo atual do cronômetro: ${minutoEditado} minutos e ${segundoEditado} segundos`
  );
});

app.get('/iniciar', (req, res) => {
  temporizador = setInterval(() => {
    console.log(`${minuto} : ${segundo}`);

    if (minuto === 0 && segundo === 0) {
      console.log('Cronometro finalizado');
      clearInterval(temporizador);
      const parar = () => {
        return clearInterval(temporizador);
      };
    } else {
      if (segundo === 0) {
        segundo = 60;
        minuto -= 1;
      }

      segundo--;
    }
  }, 1000);
  res.send('Cronômetro iniciado!');
});

app.get('/pausar', (req, res) => {
  clearInterval(temporizador);
  res.send('Cronômetro pausado!');
});

app.get('/continuar', (req, res) => {
  temporizador = setInterval(() => {
    console.log(`${minuto} : ${segundo}`);

    if (minuto === 0 && segundo === 0) {
      console.log('Cronometro finalizado');
      clearInterval(temporizador);
      const parar = () => {
        return clearInterval(temporizador);
      };
    } else {
      if (segundo === 0) {
        segundo = 60;
        minuto -= 1;
      }

      segundo--;
    }
  }, 1000);
  res.send('Cronômetro continuando!');
});

app.listen(8000);
