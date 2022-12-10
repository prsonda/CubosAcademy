const clienteNaLoja = data => {
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const diaSemana = data.getDay();

  const verificar = [
    {
      consdicao:
        diaSemana == 6 &&
        (hora < '8' || hora > '12' || (hora == '12' && minuto > 0)),
    },
    {
      consdicao:
        diaSemana == 0 ||
        hora < '8' ||
        hora > '18' ||
        (hora == '18' && minuto > 0),
    },
  ];

  const lojaFechada = verificar.find(verifica => {
    if (verifica.consdicao === true) {
      return true;
    }
  });

  if (!lojaFechada) {
    console.log(true);
  } else {
    console.log(false);
  }
};

clienteNaLoja(new Date(2021, 3, 24, 9, 30));
