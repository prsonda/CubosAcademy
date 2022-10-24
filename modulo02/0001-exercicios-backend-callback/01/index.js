function tabuada(numero, resultado) {
  contador = 0;
  while (contador < 11) {
    resultado(`${numero} x ${contador} = ${numero * contador}`);

    contador++;
  }
}

tabuada(5, resultado => {
  console.log(resultado);
});
