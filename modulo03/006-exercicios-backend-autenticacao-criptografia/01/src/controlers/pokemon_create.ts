import { Response } from "express";
import { pool } from "../conection";

export const pokemonCreated = async (req: any, res: Response) => {
  const { nome, apelido, habilidades, imagem } = req.body;
  const userId = req.user.id;

  if (!nome || !habilidades) {
    return res.status(401).json({ message: "Nome e habilidades necessários" });
  }
  try {
    const createPokemonDatabase = await pool.query(
      "insert into pokemons(usuario_id, nome, apelido, habilidades, imagem)values($1,$2,$3,$4,$5) returning *",
      [userId, nome, apelido, habilidades, imagem]
    );

    return res.status(201).json(createPokemonDatabase.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro do servidor" });
  }
};
