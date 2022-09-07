const primeiroNome = 'Mario';
const sobrenome = '';
const apelido = 'Bros';

if (apelido) {
  console.log(apelido);
} else if (sobrenome) {
  console.log(`${primeiroNome} ${sobrenome}`);
} else {
  console.log(primeiroNome);
}
