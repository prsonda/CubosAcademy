const pool = require("../banco/conectar_banco");

const cadastrarLivro = async (req, res) => {
  const livro = req.body;
  const autorId = Number(req.params.id);

  if (!livro.nome) {
    return res.status(401).json({
      mensagem: "o campo nome é obrigatório.",
    });
  }

  await pool.query(`insert into livros(nome, genero, editora, data_publicacao, id_autor)values(
'${livro.nome}','${livro.genero}','${livro.editora}','${livro.data_publicacao}',${autorId}
)`);

  const mostrarLivroCadastrado = await pool.query(
    `select * from livros order by id desc limit 1`
  );

  return res.status(200).json(mostrarLivroCadastrado.rows[0]);
};

module.exports = cadastrarLivro;
