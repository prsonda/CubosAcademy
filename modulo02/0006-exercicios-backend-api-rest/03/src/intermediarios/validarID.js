const validar = (req, res, next) => {
  const { id } = req.params;

  if (Number(id) < 0 || isNaN(id)) {
    return res.status(400).json({
      mensagem: 'O valor do parâmetro ID da URL não é um número válido.',
    });
  }

  return next();
};

module.exports = validar;
