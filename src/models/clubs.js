'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clubs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Clubs.hasMany(models.Djs,{foreignKey: 'club_id'})
    }
  };
  Clubs.init({
    id: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Clubs',
    createdAt: "created_at",
    updatedAt: "update_at"
  });
  return Clubs;
};