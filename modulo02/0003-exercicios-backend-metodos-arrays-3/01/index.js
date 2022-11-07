const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const numerosCrescente = (a, b) => {
  return a - b;
};

numeros.sort(numerosCrescente);

console.log(numeros);

const numerosDecrescente = (a, b) => {
  return b - a;
};

numeros.sort(numerosDecrescente);

console.log(numeros);

numeros.sort();

console.log(numeros);

numeros;

const frutas = ['Banana', 'Amora', 'abacaxi', 'uva', 'Pera'];

const ordemAlfabetica = (a, b) => {
  return a.localeCompare(b);
};

frutas.sort(ordemAlfabetica);

console.log(frutas);

const ordemAlfabeticaDecrescente = (a, b) => {
  return b.localeCompare(a);
};

frutas.sort(ordemAlfabeticaDecrescente);

console.log(frutas);

const ordemQuantCaracteres = (a, b) => {
  return a.length - b.length;
};

frutas.sort(ordemQuantCaracteres);

console.log(frutas);
