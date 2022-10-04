const cpf = '011.022.033-44';

let cpfAlterado = cpf;
for (let item of cpf) {
  if (item === '.' || item === '-' || item === '/') {
    cpfAlterado = cpfAlterado
      .replace('.', '')
      .replace('-', '')
      .replace('/', '');
  }
}

console.log(cpfAlterado);
