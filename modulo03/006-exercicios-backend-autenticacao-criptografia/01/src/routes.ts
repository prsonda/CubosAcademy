import { Router } from "express";
import { createUser } from "./controlers/create_user";
import { validateRegistrationData } from "./midiarers/validate_registration_data";

export const routes = Router();

routes.post("/createuser", validateRegistrationData, createUser);
