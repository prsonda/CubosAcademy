import { Router } from "express";
import { consultCompanies } from "./controlers/consult-companies";

export const routes = Router();

routes.get("/empresas/:dominioEmpresa", consultCompanies);
