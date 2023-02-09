import { Request, Response } from "express";
import { pool } from "../conection";

export const pokemonGroup = async (req: Request, res: Response) => {
  try {
    const groupPokemonDatabase = await pool.query("select * from pokemons");

    return res.status(200).json(groupPokemonDatabase.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro do servidor" });
  }
};
