import { Request, Response } from "express";
import { pool } from "../conection";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query("select * from usuarios where email = $1", [
      email,
    ]);

    if (user.rowCount < 1) {
      return res.status(404).json({ message: "E-mail ou senha inválida!" });
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].senha);

    if (!validPassword) {
      return res.status(404).json({ message: "E-mail ou senha inválida!" });
    }

    const token = jwt.sign({ id: user.rows[0].id }, process.env.PASSWORD_JWT, {
      expiresIn: "8h",
    });

    const { senha: _, ...loggedUser } = user.rows[0];

    return res.status(200).json({ user: loggedUser, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro do servidor" });
  }
};
