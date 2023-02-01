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
        `select * from autores order by id desc limit 1`
      );
      return res.status(200).json(mostrarAutor.rows[0]);
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = cadastrarAutor;
