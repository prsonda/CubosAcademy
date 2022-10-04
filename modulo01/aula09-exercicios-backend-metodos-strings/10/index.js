const nomeArquivo = 'Foto da Familia.pdf';

// São permitidos arquivos: jpg, jpeg, gif e png
function verificaArquivo(arquivo) {
  const posicaoPonto = arquivo.lastIndexOf('.');

  let extencao = '';
  if (posicaoPonto > -1) {
    extencao = nomeArquivo.slice(posicaoPonto + 1);
  }
  if (
    extencao === 'jpg' ||
    extencao === 'jpeg' ||
    extencao === 'gif' ||
    extencao === 'png'
  ) {
    console.log('Arquivo válido');
  } else {
    console.log('Arquivo inválido');
  }
}

verificaArquivo(nomeArquivo);
