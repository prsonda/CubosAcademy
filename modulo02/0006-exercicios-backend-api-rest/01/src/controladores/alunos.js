let { alunos, identificadorAluno } = require('../dados/bancoAlunos');

const listarAlunos = (req, res) => {
  return res.status(200).json(alunos);
};

const listarAlunoId = (req, res) => {
  const { id } = req.params;
  let aluno = alunos.find(aluno => {
    return Number(id) === aluno.id;
  });

  if (isNaN(id) || Number(id) < 0) {
    return res.status(400).json({ mensagem: 'Id inválido' });
  }

  if (!aluno) {
    return res
      .status(404)
      .json({ mensagem: 'Nenhum aluno encontrado com esse id' });
  }

  return res.status(200).json(aluno);
};

const cadastrarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;

  if (!nome || !sobrenome || !idade || !curso) {
    return res
      .status(400)
      .json({ mensagem: 'nome, sobrenome, idade e curso são obrigatórios.' });
  }

  if (nome.trim() == '' || sobrenome.trim() == '' || curso.trim() == '') {
    return res.status(400).json({
      mensagem:
        'nome, sobrenome e curso não pode estar vazio ou apenas com espaços vazios.',
    });
  }

  if (idade < 18) {
    return res.status(400).json({
      mensagem: 'O aluno precisa ser maior de idade.',
    });
  }

  const aluno = {
    id: ++identificadorAluno,
    nome,
    sobrenome,
    idade,
    curso,
  };
  alunos.push(aluno);

  res.status(201).json();
};

module.exports = {
  listarAlunos,
  listarAlunoId,
  cadastrarAluno,
};
