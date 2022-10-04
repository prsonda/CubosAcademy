const nome = 'paulo robson da silva';

function alteraNome(nome) {
  let nomeCompleto = '';
  for (let item of nome) {
    let primeiraLetra = item.slice(0, 1).toUpperCase();
    let restanteNome = item.slice(1);
    nomeCompleto += primeiraLetra + restanteNome + ' ';
  }
  return nomeCompleto.trim();
}

const primeiraMaiuscula = alteraNome(nome.split(' '));

console.log(primeiraMaiuscula);
