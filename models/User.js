<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
=======
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
>>>>>>> d3afb150eaeb0440e091488774f346b0f3d83f48

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
<<<<<<< HEAD
=======
    profilePicture: {
      type: DataTypes.BLOB,
    },
>>>>>>> d3afb150eaeb0440e091488774f346b0f3d83f48
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
<<<<<<< HEAD
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
=======
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
>>>>>>> d3afb150eaeb0440e091488774f346b0f3d83f48
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'user',
  }
);

module.exports = User;
=======
    modelName: "user",
  }
);

module.exports = User;
>>>>>>> d3afb150eaeb0440e091488774f346b0f3d83f48
