const clienteNaLoja = data => {
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const diaSemana = data.getDay();

  let lojaAberta = true;

  if (
    diaSemana == 0 ||
    diaSemana == 6 ||
    hora < '8' ||
    hora > '18' ||
    (hora == '18' && minuto > 0)
  ) {
    lojaAberta = false;
    console.log(lojaAberta);
  } else {
    console.log(lojaAberta);
  }
};

clienteNaLoja(new Date(2022, 11, 10, 8));
