let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;

const tempo =
  tempoParaAlarmarEmSegundos * 1000 + tempoAlarmandoEmSegundos * 1000 + 100;

function alarme(tempoBipando, callback) {
  console.log(
    `Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`
  );

  const tempoEspera = () => {
    let contador = 1;

    const contagem = () => {
      console.log('Beep beep!');
      contador++;
      if (contador > tempoBipando) {
        clearInterval(intervalo);
      }
    };
    const intervalo = setInterval(contagem, 1000);
  };

  setTimeout(tempoEspera, tempoParaAlarmarEmSegundos * 1000);

  callback();
}

function soneca() {
  for (let index = 1; index <= numeroDeSonecas; index++) {
    function e() {
      console.log(
        `Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`
      );

      const tempoEspera = () => {
        let contador = 1;

        const contagem = () => {
          console.log('Beep beep!');
          contador++;
          if (contador > tempoAlarmandoEmSegundos) {
            clearInterval(intervalo);
          }
        };
        const intervalo = setInterval(contagem, 1000);
      };

      setTimeout(tempoEspera, tempoSonecaEmSegundos * 1000);
    }
    setTimeout(e, index * tempo);
  }
}

alarme(tempoAlarmandoEmSegundos, soneca);
