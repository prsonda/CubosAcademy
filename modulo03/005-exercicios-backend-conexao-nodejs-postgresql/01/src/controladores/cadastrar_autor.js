const pool = require("../banco/conectar_banco");

const cadastrarAutor = async (req, res) => {
  const autor = req.body;

  try {
    if (!autor.nome) {
      return res.status(401).json({
        mensagem: "o campo nome é obrigatório.",
      });
    } else {
      await pool.query(
        `insert into autores(nome, idade) Values('${autor.nome}', ${autor.idade})`
      );

      const mostrarAutor = await pool.query(
        `select * from autores where nome = '${autor.nome}'`
      );
      return res.status(200).json(mostrarAutor.rows);
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = cadastrarAutor;
