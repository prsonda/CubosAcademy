const validar = (req, res, next) => {
  const { senha } = req.query;

  let verificar = false;

  for (var key in senha) {
    verificar = true;
  }

  if (!verificar) {
    return res.status(401).json({
      mensagem: 'É preciso uma senha para acessar.',
    });
  }

  if (senha === 'cubos123') {
    return next();
  }

  return res.status(401).json({
    mensagem: 'A senha está incorreta.',
  });
};

module.exports = validar;
