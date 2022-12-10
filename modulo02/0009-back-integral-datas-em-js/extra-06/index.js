function promocao(dataPromocao, dataCliente) {
  const tempoCliente = +dataCliente - +dataPromocao;
  const milissegundos24Horas = 24 * 1000 * 60 * 60;

  if (tempoCliente <= milissegundos24Horas) {
    console.log(true);
  } else {
    console.log(false);
  }
}

promocao(new Date(2022, 10, 12, 11, 00), new Date(2022, 10, 13, 11, 01));
