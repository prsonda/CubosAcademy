import { Request, Response } from "express";
import { pool } from "../conection";

export const pokemonFillterId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const groupPokemonDatabase = await pool.query(
      "select * from pokemons where id = $1",
      [id]
    );

    if (groupPokemonDatabase.rowCount < 1) {
      return res.status(404).json("Pokemon não encontrado!");
    }
    return res.status(200).json(groupPokemonDatabase.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro do servidor" });
  }
};
