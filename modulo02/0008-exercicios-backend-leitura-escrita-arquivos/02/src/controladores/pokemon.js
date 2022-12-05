const { listarPokemons, detalharPokemon } = require('utils-playground');

const listaPokemon = async (req, res) => {
  try {
    const listar = await listarPokemons();

    res.status(200).json(listar.results);
  } catch (erro) {
    res.status(400).json(`Erro: ${erro.mesage}`);
  }
};

const listaPokemonId = async (req, res) => {
  try {
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
  } catch (erro) {
    res.status(400).json(`Erro: ${erro.mesage}`);
  }
};

module.exports = {
  listaPokemon,
  listaPokemonId,
};
