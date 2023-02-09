import { Router } from "express";
import { createUser } from "./controlers/create_user";
import { login } from "./controlers/login";
import { pokemonCreated } from "./controlers/pokemon_create";
import { deletePokemonId } from "./controlers/pokemon_delete";
import { pokemonFillterId } from "./controlers/pokemon_fillter_id";
import { pokemonGroup } from "./controlers/pokemon_group";
import { pokemonUpdate } from "./controlers/pokemon_update";
import { validateLogin } from "./midiarers/validate_login";
import { validateLoginData } from "./midiarers/validate_login_data";
import { validateRegistrationData } from "./midiarers/validate_registration_data";

export const routes = Router();

routes.post("/createuser", validateRegistrationData, createUser);
routes.post("/login", validateLoginData, login);

routes.use(validateLogin);
routes.post("/create", pokemonCreated);
routes.put("/update/:id", pokemonUpdate);
routes.get("/group", pokemonGroup);
routes.get("/fillter/:id", pokemonFillterId);
routes.delete("/delete/:id", deletePokemonId);
