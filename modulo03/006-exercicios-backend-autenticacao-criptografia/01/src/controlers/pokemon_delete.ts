import { Request, Response } from "express";
import { pool } from "../conection";

export const deletePokemonId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletePokemonDatabase = await pool.query(
      "delete from pokemons where id = $1 returning *",
      [id]
    );

    if (deletePokemonDatabase.rowCount < 1) {
      return res.status(404).json("Pokemon não encontrado!");
    }
    return res.status(200).json(deletePokemonDatabase.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro do servidor" });
  }
};
