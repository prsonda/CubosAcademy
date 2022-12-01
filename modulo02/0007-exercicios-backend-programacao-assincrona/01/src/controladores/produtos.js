const { getStateFromZipcode } = require('utils-playground');
const produtos = require('../bancodedados/produtos');
const porcentagemFrete = require('../bancodedados/porcentagemFrete');

const listarProdutos = (req, res) => {
  return res.status(200).json(produtos);
};

const buscarProdutoId = async (req, res) => {
  const { idProduto } = await req.params;

  const produto = produtos.find(produto => {
    return Number(idProduto) === produto.id;
  });

  if (isNaN(idProduto) || idProduto < 0) {
    return res.status(400).json('ID inválido');
  }

  if (!produto) {
    return res.status(404).json('Nenhum produto encontrado com esse ID');
  }

  return res.status(200).json(produto);
};

const calcularFrete = async (req, res) => {
  const { idProduto, cep } = await req.params;

  if (isNaN(idProduto) || idProduto < 0) {
    return res.status(400).json('ID inválido');
  }

  if (isNaN(cep) || cep.length !== 8) {
    return res.status(400).json('cep inválido');
  }

  const estado = await getStateFromZipcode(cep);

  const produto = produtos.find(produto => {
    return Number(idProduto) === produto.id;
  });

  if (!produto) {
    return res.status(404).json('Nenhum produto encontrado com esse ID');
  }

  const local = porcentagemFrete.find(es => {
    return es.estado === estado;
  });

  if (local) {
    const resultado = {
      produto: produto,
      estado: estado,
      frete: produto.valor * local.frete,
    };

    return res.status(200).json(resultado);
  }
  if (!local) {
    const local = porcentagemFrete.find(es => {
      return es.estado === 'padrao';
    });

    if (local) {
      const resultado = {
        produto: produto,
        estado: estado,
        frete: produto.valor * local.frete,
      };

      return res.status(200).json(resultado);
    }
  }
};

module.exports = {
  listarProdutos,
  buscarProdutoId,
  calcularFrete,
};
