import { Response } from "express";
import { pool } from "../conection";
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const validateLogin = async (req: any, res: Response, next: any) => {
  const { authorization } = req.headers;

  try {
    const token = authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Usuário não autorizado!" });
    }

    const { id } = await jwt.verify(token, process.env.PASSWORD_JWT);

    const { rows, rowCount } = await pool.query(
      "select * from usuarios where id = $1",
      [id]
    );

    if (rowCount < 1) {
      res.status(401).json({ message: "Usuário não autorizado!" });
    }

    req.user = rows[0];

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ messge: "Erro interno do servidor!" });
  }
};
