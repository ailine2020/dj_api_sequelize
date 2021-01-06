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
      models.Djs.belongTo(models.Clubs, { foreignKey: 'club_id' });
      models.Djs.hasOne(models.Djmusicalgenres, { foreignKey: 'dj_id' })
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
    club_id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Djs',
    createdAt: "created_at",
    updatedAt: "update_at"
  });
  return Djs;
};