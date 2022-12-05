const { getStateFromZipcode } = require('utils-playground');
const produtos = require('../bancodedados/produtos');
const porcentagemFrete = require('../bancodedados/porcentagemFrete');

const listarProdutos = (req, res) => {
  try {
    return res.status(200).json(produtos);
  } catch (erro) {
    return res.status(400).json(`Erro: ${erro.mesage}`);
  }
};

const buscarProdutoId = async (req, res) => {
  const { idProduto } = req.params;

  try {
    const produto = await produtos.find(produto => {
      return Number(idProduto) === produto.id;
    });

    if (isNaN(idProduto) || idProduto < 0) {
      return res.status(400).json('ID inválido');
    }

    if (!produto) {
      return res.status(404).json('Nenhum produto encontrado com esse ID');
    }

    return res.status(200).json(produto);
  } catch (erro) {
    return res.status(400).json(`Erro: ${erro.mesage}`);
  }
};

const calcularFrete = async (req, res) => {
  const { idProduto, cep } = await req.params;

  try {
    if (isNaN(idProduto) || idProduto < 0) {
      return res.status(400).json('ID inválido');
    }

    if (isNaN(cep) || cep.length !== 8) {
      return res.status(400).json('cep inválido');
    }

    const estado = await getStateFromZipcode(cep);

    if (!estado) {
      return res.status(404).json('CEP inválido');
    }

    const produto = produtos.find(produto => {
      return Number(idProduto) === produto.id;
    });

    if (!produto) {
      return res.status(404).json('Nenhum produto encontrado com esse ID');
    }

    const local = porcentagemFrete.find(uf => {
      return uf.estado === estado;
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
  } catch (erro) {
    return res.status(400).json(`Erro: ${erro.mesage}`);
  }
};

module.exports = {
  listarProdutos,
  buscarProdutoId,
  calcularFrete,
};
