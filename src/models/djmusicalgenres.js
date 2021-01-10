'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.DjMusicalgenres.belongTo(models.Djs, {
      //   foreignKey: 'dj_id',
      //   through: DjMusicalgenres,
      // });
      // models.DjMusicalgenres.hasMany(models.Musicalgenres, {
      //   foreignKey: 'musicalgenre_id',
      //   through: DjMusicalgenres,
      // })
    }
  };
  DjMusicalgenres.init({
    id: {
      defaultValue: DataTypes.UUID,
      type: DataTypes.UUID,
      primaryKey: true
    },
    dj_id: DataTypes.UUID,
    musicalgenre_id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DjMusicalgenres',
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return DjMusicalgenres;
};