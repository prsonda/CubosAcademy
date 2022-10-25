let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;

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
