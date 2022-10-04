const comentario = 'Esse COVID é muito perigoso!';

let autorizado = true;

for (let item of comentario.toLowerCase().split(' ')) {
  if (item === 'pandemia' || item === 'covid') {
    autorizado = false;
  }
}

if (autorizado) {
  console.log('Comentário autorizado');
} else {
  console.log('Comentário bloqueado por conter palavras proibidas');
}
