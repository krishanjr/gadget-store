const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Message = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
    fullName: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    emailAddress: {    
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      validate: {
        isEmail: true,
      },
    },
    subject: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
    message:{      
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    }
  }
);


module.exports = {
  sequelize,
  Message
};