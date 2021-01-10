const {
  Musicalgenres
} = require("../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    const musicalGenres = await Musicalgenres.findAll()
    return {
      musicalGenres
    };
  },
};

module.exports = musicalGenresController;