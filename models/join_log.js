'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class join_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  join_log.init({
    workHours: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'join_log',
  });
  return join_log;
};