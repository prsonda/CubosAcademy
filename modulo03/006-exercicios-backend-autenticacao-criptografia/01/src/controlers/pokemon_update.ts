import { Request, Response } from "express";
import { pool } from "../conection";

export const pokemonUpdate = async (req: Request, res: Response) => {
  const { apelido } = req.body;
  const { id } = req.params;

  try {
    const updatePokemonDatabase = await pool.query(
      "update pokemons set apelido = $1 where id = $2 returning *",
      [apelido, id]
    );

    if (!updatePokemonDatabase.rows[0]) {
      return res.status(404).json("Pokemon não encontrado!");
    }

    return res.status(200).json(updatePokemonDatabase.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro do servidor" });
  }
};
