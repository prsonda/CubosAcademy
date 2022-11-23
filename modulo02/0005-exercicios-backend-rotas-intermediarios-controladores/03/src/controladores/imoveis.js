const imoveis = require('../dados/imoveis');

const get = (req, res) => {
  res.send(imoveis);
};

const getPorId = (req, res) => {
  const imovelEncontrado = imoveis.find(imovel => {
    return imovel.id === Number(req.params.id);
  });

  if (imovelEncontrado) {
    res.send(imovelEncontrado);
  } else {
    res.send(`Nenhum imóvel encontrado com o id ${req.params.id}`);
  }
};

module.exports = {
  get,
  getPorId,
};
