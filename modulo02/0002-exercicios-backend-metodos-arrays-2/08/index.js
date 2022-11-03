const frutas = ['Manga', 'UVA', 'abacaxi', 'banana', 'MAçã'];

const colocarIndice = fruta => {
  const indice = frutas.indexOf(fruta);
  return `${indice} - ${fruta}`;
};

const resultado = frutas.map(colocarIndice);

console.log(resultado);
