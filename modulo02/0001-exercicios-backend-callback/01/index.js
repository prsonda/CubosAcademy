function tabuada(numero, callback) {
  let resultado = '';
  for (let index = 0; index < 11; index++) {
    resultado += `${numero} x ${index} = ${numero * index} \n`;
  }

  callback(resultado);
}

const resultado = resultado => {
  console.log(resultado);
};

tabuada(5, resultado);
