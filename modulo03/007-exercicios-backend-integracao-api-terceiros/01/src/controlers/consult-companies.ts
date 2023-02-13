import { Request, Response } from "express";
import { instanceAxios } from "../instance-axios";
const empresas = require("../empresas.json");
import { writeFile } from "fs/promises";

export const consultCompanies = async (req: Request, res: Response) => {
	const { authorization } = req.headers;
	const { dominioEmpresa } = req.params;

	try {
		const tokenApi = authorization?.split(" ")[1];

		if (!tokenApi) {
			return res.status(401).json("Token obrigatório");
		}

		const response = await instanceAxios.get(
			`?api_key=${tokenApi}&domain=${dominioEmpresa}`
		);

		empresas.push(response.data);

		const convertToString = JSON.stringify(empresas);

		const saveFile = writeFile("src/empresas.json", convertToString, {});

		return res.status(200).json(response.data);
	} catch (error) {
		const erro = error as Error;
		console.log(erro.message);
		return res.status(500).json({ message: "Erro de servidor" });
	}
};
