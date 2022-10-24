const tabuadas = ([tabuada1, tabuada2, tabuada3]) => {};

const tabuada = (tabuadas, resultado) => {
  for (const tabuada of tabuadas) {
    for (let index = 0; index < 11; index++) {
      resultado(`${tabuada} x ${index} = ${tabuada * index}`);
    }
    console.log('-'.repeat(12));
    console.log();
  }
};

tabuada([1, 5, 2], resultado => {
  console.log(resultado);
});
