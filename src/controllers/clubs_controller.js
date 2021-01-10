const {
  Clubs
} = require("../models");

const clubsController = {
  getAllClubs: async () => {
    const AllClubs = await Clubs.findAll()
    return {
      AllClubs
    }
  },
  getClub: async (name) => {
    const oneClub = await Clubs.findOne({
      where: {
        name: name
      }
    })
    return {
      oneClub
    };
  },
  addClub: async (data) => {
    const newClub = await Clubs.create(data)
    return newClub
  },
};

module.exports = clubsController;