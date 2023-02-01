const pool = require("../banco/conectar_banco");

const listarLivros = async (req, res) => {
  const pegarLivros = await pool.query("select * from livros");

  const pegarAutores = await pool.query("select * from autores");

  //colunas com nomes iguais, sendo suprimida a primeira

  //   const mortrarLivros = await pool.query(
  //     "SELECT * FROM livros JOIN  autores ON id_autor = autores.id;"
  //   );

  const livro = pegarLivros.rows;

  const resultado = livro.map((livro) => {
    const autor = pegarAutores.rows.find((autor) => {
      if (autor.id === livro.id_autor) {
        return autor;
      }
    });
    return {
      id: livro.id,
      nome: livro.nome,
      genero: livro.genero,
      editora: livro.editora,
      data_publicacao: livro.data_publicacao,
      autor: {
        id: autor.id,
        nome: autor.nome,
        idade: autor.idade,
      },
    };
  });

  return res.status(200).json(resultado);
};

module.exports = listarLivros;
