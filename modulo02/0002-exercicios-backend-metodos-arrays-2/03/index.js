const palavras = ['arroz', 'feijão', 'carne', 'cerveja', 'macarrão'];

const checar = item => {
  return item === 'cerveja' || item === 'vodka';
};

const resultado = palavras.some(checar);

if (resultado) {
  console.log('revise sua lista, joão. possui bebida com venda proibida!');
} else {
  console.log('tudo certo, vamos as compras!');
}
