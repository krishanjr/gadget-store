const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
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
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'other', 'prefer-not-to-say'),
  },
  address: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  zipCode: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  }
});


module.exports = {
  sequelize,
  User,
};