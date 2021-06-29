'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  room.init({
    catgory: DataTypes.STRING,
    uuid: DataTypes.STRING,
    entry: DataTypes.STRING,
    valid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'room',
  });
  return room;
};