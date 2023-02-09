import { Request, Response } from "express";
const axios = require("axios").default;

export const listar = async (req: Request, res: Response) => {
  const instance = axios.create({
    baseURL: "https://viacep.com.br/ws/",
  });
  const response = await instance.get("01001000/json");

  res.json(response.data);
};
