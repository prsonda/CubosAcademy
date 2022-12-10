function promocao(dataPromocao, dataCliente) {
  const tempoCliente = +dataCliente - +dataPromocao;
  const milissegundos30Dias = 30 * 24 * 1000 * 60 * 60;

  if (tempoCliente <= milissegundos30Dias) {
    console.log(true);
  } else {
    console.log(false);
  }
}

promocao(new Date(2022, 10, 12, 11, 00), new Date(2022, 10, 20, 11, 01));
