const tabuada = (tabuadas, callback) => {
  for (const tabuada of tabuadas) {
    let resultado = '';

    for (let index = 0; index < 11; index++) {
      if (index < 10) {
        resultado += `${tabuada} x ${index} = ${tabuada * index} \n`;
      } else {
        resultado += `${tabuada} x ${index} = ${tabuada * index}`;
      }
    }

    callback(resultado);
    console.log('-'.repeat(12));
    console.log();
  }
};

const resultado = resultado => {
  console.log(resultado);
};

tabuada([1, 5, 2], resultado);
