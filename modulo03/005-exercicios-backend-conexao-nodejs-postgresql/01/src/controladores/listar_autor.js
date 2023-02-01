const pool = require("../banco/conectar_banco");

const listarAutores = async (req, res) => {
  try {
    const mostrarAutor = await pool.query(
      `select * from autores where id = ${req.params.id}`
    );

    const mostrarlivrosAutor = await pool.query(
      `select * from livros where id_autor = ${req.params.id}`
    );

    const autorEncontrado = mostrarAutor.rows.find((autor) => {
      if (!autor) {
        return undefined;
      }

      return autor;
    });

    if (!autorEncontrado) {
      return res.status(404).json({
        mensagem: "Autor não encontrado",
      });
    }

    const autor = mostrarAutor.rows[0];

    const resultado = {
      id: autor.id,
      nome: autor.nome,
      idade: autor.idade,
      livros: mostrarlivrosAutor.rows,
    };

    // não é possível usar o join pois a tabela autores e livros tem a mesma coluna nome, ficando apenas uma, a outra é suprimida.

    // const mostrar = await pool.query(
    //   `SELECT * FROM autores JOIN livros ON id_autor = ${req.params.id};`
    // );

    return res.status(200).json(resultado);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = listarAutores;
