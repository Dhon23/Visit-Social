'use strict';
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile)
    }
    static newUser(email, password, role){
      return User.create({
        email, 
        password, 
        role
      })
    }
  }
  User.init({
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: 'Please insert your email'},
        notNull: {msg: 'Please insert your email'},
        contains: {args: [['@']], msg: 'Please enter your real email'}
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: 'Please insert your password'},
        notNull: {msg: 'Please insert your password'},
      }
    },
    role: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        const salt = bcrypt.genSaltSync(10);
        const encrypt = bcrypt.hashSync(instance.password, salt);
        instance.password = encrypt;
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};