const tabuada = ([tabuada1, tabuada2, tabuada3], resultado) => {
  for (let index = 0; index < 11; index++) {
    resultado(`${tabuada1} x ${index} = ${tabuada1 * index}`);
  }

  console.log('-'.repeat(12));
  console.log();

  for (let index = 0; index < 11; index++) {
    resultado(`${tabuada2} x ${index} = ${tabuada2 * index}`);
  }

  console.log('-'.repeat(12));
  console.log();

  for (let index = 0; index < 11; index++) {
    resultado(`${tabuada3} x ${index} = ${tabuada3 * index}`);
  }

  console.log('-'.repeat(12));
  console.log();
};

tabuada([1, 5, 2], resultado => {
  console.log(resultado);
});
