// função para validar o id dos itens no banco de dados
const validar = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      mensagem: 'É preciso digitar um ID para acessar.',
    });
  }

  if (Number(id) < 0 || isNaN(id)) {
    return res.status(400).json({
      mensagem: 'O valor do parâmetro ID da URL não é um número válido.',
    });
  }

  return next();
};

module.exports = validar;
