const pool = require("../banco/conectar_banco");

const listarAutores = async (req, res) => {
  try {
    const mostrarAutor = await pool.query(
      `select * from autores where id = ${req.params.id}`
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

    return res.status(200).json(mostrarAutor.rows);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = listarAutores;
