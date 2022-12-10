const clienteNaLoja = data => {
  const hora = data.getHours();
  const minuto = data.getMinutes();

  let lojaAberta = true;

  if (hora < '8' || hora > '18' || (hora == '18' && minuto > 0)) {
    lojaAberta = false;
    console.log(lojaAberta);
  } else {
    console.log(lojaAberta);
  }
};

clienteNaLoja(new Date(2022, 11, 09, 8));
