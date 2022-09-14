const palpite = 'a';
const palavra = 'abelha';

let soma = 0;
for (let letra of palavra) {
  if (letra === palpite) {
    soma += 1;
  }
}
console.log(soma);
