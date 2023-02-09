import { Router } from "express";
import { listar } from "./controlers/listar";

export const routes = Router();

routes.get("/", listar);
