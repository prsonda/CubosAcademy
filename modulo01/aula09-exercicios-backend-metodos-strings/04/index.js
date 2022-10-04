let identificador = '123';
let nome = 'José silva costa';
let email = '      jose@email.com  ';

console.log(identificador.padStart(6, '0'));

let nomeCompleto = '';

for (let item of nome.split(' ')) {
  let primeiraLetra = item.slice(0, 1).toUpperCase();
  let restanteNome = item.slice(1);
  nomeCompleto += primeiraLetra + restanteNome + ' ';
}

console.log(nomeCompleto.trim());

console.log(email.trim());
