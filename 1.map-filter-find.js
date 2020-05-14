const getPokeNames = (pokemons) => {
  return pokemons.map((pokemon) => pokemon.name);
};

const getPokemonById = (pokemons, id) => {
  const singlePokemon = pokemons.find((pokemon) => {
    // console.log('ID OF CURRENT POKEMON:', pokemon.id)
    // console.log("ID WE ARE LOOKING FOR:", id)
    return pokemon.id === id;
  });

  return singlePokemon;
};

const getRarePokemons = (pokemons) => {
  //   console.log("pokemons:", pokemons);
  return pokemons.filter((pokemon) => pokemon.spawn_chance < 0.1);
};

const getMidSizedPokemon = (pokemons) =>
  pokemons.find((pokemon) => parseInt(pokemon.weight) === 38);

const getAdultPokemons = (pokemons) =>
  pokemons.filter((pokemon) => pokemon.egg === "Not in Eggs");

const getPokemonImages = (pokemons) => pokemons.map((pokemon) => pokemon.img);

module.exports = {
  getPokeNames,
  getPokemonById,
  getRarePokemons,
  getMidSizedPokemon,
  getAdultPokemons,
  getPokemonImages,
};
