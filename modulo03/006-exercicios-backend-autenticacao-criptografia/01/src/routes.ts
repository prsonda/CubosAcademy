import { Router } from "express";
import { createUser } from "./controlers/create_user";
import { login } from "./controlers/login";
import { validateLoginData } from "./midiarers/validate_login_data";
import { validateRegistrationData } from "./midiarers/validate_registration_data";

export const routes = Router();

routes.post("/createuser", validateRegistrationData, createUser);
routes.post("/login", validateLoginData, login);
