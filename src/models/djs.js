'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Djs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Djs.belongsTo(models.Clubs, {
        foreignKey: {
          name: 'club_id'
        }
      });
      models.Djs.belongsToMany(models.Musicalgenres, {
        through: "DjMusicalgenres",
        foreignKey: 'dj_id'
      })
    }
  };
  Djs.init({
    id: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true
    },
    url_name: DataTypes.STRING,
    name: DataTypes.STRING,
    biography: DataTypes.STRING,
    soundcloud: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    spotify: DataTypes.STRING,
    beatport: DataTypes.STRING,
    mixcloud: DataTypes.STRING,
    youtube: DataTypes.STRING,
    club_id: {
      type: DataTypes.UUID,
      references: {
        key: "id",
        model: "Clubs"
      }
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Djs',
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return Djs;
};