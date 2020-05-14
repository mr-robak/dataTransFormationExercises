const pokemons = require("./pokeData");
const trainers = require("./trainerData");
const gyms = require("./gymData");

const getGymLeader = (gym, trainers) =>
  trainers.find((t) => t.id === gym.trainerId);

const getTrainerPokemons = (trainer, pokemons) =>
  pokemons.filter((p) => trainer.pokemonIds.indexOf(p.id) >= 0);

const getTrainersPokemons = (trainers, pokemons) => {
  //   console.log(trainers);
  const newTs = trainers.map((t) => {
    t["pokemons"] = t.pokemonIds;
    delete t.pokemonIds;
    return t;
  });
  //   console.log("newTs", newTs);
  const replTs = newTs.map((t) => {
    // console.log("...t", { ...t, pokemons: t.pokemons });
    return {
      ...t,
      pokemons: t.pokemons.map((id) => {
        return pokemons.find((p) => p.id === id);
      }),
    };
  });

  return replTs;
  console.log("replTs", replTs[0]);
  // t.pokemons.map((id) => {
  //         return pokemons.find((p) => p.id === id);
  // });
};

const getBigGyms = (gyms, trainers) => {
  //   console.log(trainers);
  const filterTs = trainers.filter((t) => t.pokemons.length >= 4);

  console.log("filterTs", filterTs);

  const cities = gyms.filter((g) => {
    if (indexOf) g.trainerId;
  });

  console.log("cities", cities);
};

const getRarestGym = (gyms, trainers, pokemons) => {};

module.exports = {
  getGymLeader,
  getTrainerPokemons,
  getTrainersPokemons,
  getBigGyms,
  getRarestGym,
};
