const { listarPokemons, detalharPokemon } = require('utils-playground');

const listaPokemon = async (req, res) => {
  const listar = await listarPokemons();

  res.status(200).json(listar.results);
};

const listaPokemonId = async (req, res) => {
  const pokemonId = await detalharPokemon(req.params.id);

  const resultado = {
    id: pokemonId.id,
    name: pokemonId.name,
    height: pokemonId.height,
    weight: pokemonId.weight,
    base_experience: pokemonId.base_experience,
    forms: pokemonId.forms,
    abilities: pokemonId.abilities,
    species: pokemonId.species,
  };

  res.status(200).json(resultado);
};

module.exports = {
  listaPokemon,
  listaPokemonId,
};
