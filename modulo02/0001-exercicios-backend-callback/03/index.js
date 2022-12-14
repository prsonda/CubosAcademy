const jogadores = ['Guido', 'Dani', 'Ruli', 'Diego', 'Vidal'];

const jogo = (jogadores, callback) => {
  let contador = 0;

  const mensagem = () => {
    console.log(jogadores[contador]);
    contador++;

    if (contador >= jogadores.length) {
      console.log('A rodada terminou!');
      clearInterval(temporizador);
    }
  };
  const tempo = (10 / jogadores.length) * 1000;

  callback(temporizador, mensagem, tempo);
};

const temporizador = (temporizador, mensagem, tempo) => {
  temporizador = setInterval(mensagem, tempo);
};

jogo(jogadores, temporizador);
