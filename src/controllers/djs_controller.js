const {
  pick
} = require("lodash");

const {
  Djs,
  Musicalgenres,
  DjMusicalgenres,
  Clubs
} = require("../models");
const {
  NotFoundError
} = require("../helpers/errors");
const musicalgenres = require("../models/musicalgenres");

const djsController = {
  getAllDjs: async () => {
    const allDjs = await Djs.findAll({
      include: [Clubs, Musicalgenres]
    })
    return {
      allDjs
    };
  },

  getDj: async (name) => {
    const oneDj = await Djs.findOne({
      where: {
        name: name
      }
    })
    return {
      oneDj
    };
  },

  addDj: async (data) => {

    const newDj = await Djs.create(data);

    const musicalgenres = await Musicalgenres.findOne({
      where : {
        name : data.musical_genres[0]
      }
    });
    if (!musicalgenres){
      throw new NotFoundError("Ressource introuvable","Ce genre de musique n'existe pas")
    }  
    await DjMusicalgenres.create({
      dj_id: newDj.id,
      musicalgenre_id : musicalgenres.id
    })
    // const newDj = await Djs.create(data, {
    //   through: data.musical_genres
    // })
    return {
      newDj
    };
  },

  updateDj: async (name, data) => {
    const updateDj = await Djs.update(data, {
      where: {
        name: name
      }
    })
    return {
      updateDj
    };
  },

  deleteDj: async (name) => {
    const deleteDj = await Djs.destroy({
      where: {
        name: name
      }
    })
    return {
      deleteDj
    };
  },
};

module.exports = djsController;