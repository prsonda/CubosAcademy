const senhaValida = 'cubos123';

// função para validar senhas
const validar = (req, res, next) => {
  const { senha } = req.query;

  if (!senha) {
    return res.status(401).json({
      mensagem: 'É preciso uma senha para acessar.',
    });
  }

  if (senha !== senhaValida) {
    return res.status(401).json({
      mensagem: 'A senha está incorreta.',
    });
  }

  return next();
};

module.exports = validar;
