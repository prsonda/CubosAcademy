import { Request, Response } from "express";

export const validateRegistrationData = (
  req: Request,
  res: Response,
  next: any
) => {
  const { name, email, password } = req.body;

  try {
    if (!name) {
      return res.status(401).json({ message: "Nome necessário" });
    }

    if (!email) {
      return res.status(401).json({ message: "E-mail necessário" });
    }

    if (!password) {
      return res.status(401).json({ message: "Senha necessário" });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro do servidor" });
  }
};
