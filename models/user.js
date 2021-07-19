'use strict';
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config()

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    comparePassword(password) {
      return bcrypt.compareSync(password, this.password)
    }
    changePassword(password) {
      const salt = bcrypt.genSaltSync(10, process.env.SALT);
      return bcrypt.hashSync(password, salt);
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    username: DataTypes.STRING,
    category: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    search: DataTypes.STRING,
    interest: DataTypes.STRING,
    subId: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, process.env.SALT);
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};