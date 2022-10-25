let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;

let tempoAlarme = tempoParaAlarmarEmSegundos * 1000;
let tempoAlarmando = tempoAlarmandoEmSegundos * 1000;
let tempoSoneca = tempoSonecaEmSegundos * 1000;

let tempoTotal = tempoAlarmando + tempoAlarme + tempoSoneca;

const temporizador = tempoBipando => {
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
};

temporizador(tempoAlarmandoEmSegundos);

// segunda parte

let soneca = 1;

while (soneca < numeroDeSonecas + 1) {
  const mensagemsoneca = () => {
    console.log(
      `Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`
    );
  };

  const tempoMensagem1 = tempoAlarmando + tempoAlarme;

  setTimeout(mensagemsoneca, tempoMensagem1 * soneca + 10);

  const sonecaEspera = tempoBipando => {
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
    const espera = tempoTotal * soneca;
    setTimeout(tempoEspera, espera);
  };

  sonecaEspera(tempoAlarmandoEmSegundos);

  soneca++;
}
