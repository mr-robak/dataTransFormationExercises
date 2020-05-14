const calculateTotalPokemonWeight = (pokemons) => {
  return pokemons.reduce((totalWeight, currentPokemon) => {
    return totalWeight + parseFloat(currentPokemon.weight);
  }, 0);
};

const calculateAverageSpawnChance = (pokemons) => {
  //   console.log("One pokemon:", pokemons[0]);
  return (
    pokemons
      .map((pokemon) => pokemon.spawn_chance)
      .reduce((acc, val) => acc + val, 0) / pokemons.length
  );
};

const calculateTotalEggDistance = (pokemons) =>
  pokemons
    .map((pokemon) => parseFloat(pokemon.egg))
    .filter((egg) => parseInt(egg))
    .reduce((a, b) => a + b, 0);

const getHeaviestPokemon = (pokemons) => {
  return pokemons.find(
    (pokemon) =>
      parseFloat(pokemon.weight) ===
      Math.max(...pokemons.map((pokemon) => parseFloat(pokemon.weight)))
  );
};

const categorizePokemonsByRarity = (pokemons) => {
  return {
    common: pokemons.filter((p) => p.spawn_chance > 0.1),
    rare: pokemons.filter(
      (p) => p.spawn_chance <= 0.1 && p.spawn_chance > 0.01
    ),
    legendary: pokemons.filter((p) => p.spawn_chance < 0.01),
  };
};

/*
    categorizePokemonsByRarity should return an object like this:
    
{
   common: [ ], // array of pokemons
   rare: [ ], // array of pokemons
   legendary: [ ], // array of pokemons
}

Common: spawn_chance higher than 0.1
Rare: spawn_chance less than 0.1
Legendary: spawn_chance less than 0.01

*/

module.exports = {
  calculateTotalPokemonWeight,
  calculateAverageSpawnChance,
  calculateTotalEggDistance,
  getHeaviestPokemon,
  categorizePokemonsByRarity,
};
