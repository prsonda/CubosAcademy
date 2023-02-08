import { Request, Response } from "express";
import { pool } from "../conection";
const bcrypt = require("bcrypt");

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const passwordEncrypted = await bcrypt.hash(password, 10);

    const consultUser = await pool.query(
      "select * from usuarios where email = $1",
      [email]
    );

    if (consultUser.rowCount < 1) {
      const createNewUser = await pool.query(
        "insert into usuarios(nome, email, senha) values($1, $2, $3) returning *",
        [name, email, passwordEncrypted]
      );

      return res.status(201).json(createNewUser.rows[0]);
    } else {
      return res.status(401).json({ messsage: "E-mail já cadastrado!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro do servidor" });
  }
};
