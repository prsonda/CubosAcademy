const nome = 'Guido Cerqueira';

let nickname = '@' + nome.toLowerCase().trim();

for (let item of nickname) {
  if (item === ' ') {
    nickname = nickname.replace(' ', '');
  }
}

nickname = nickname.slice(0, 13);

console.log(nickname);
