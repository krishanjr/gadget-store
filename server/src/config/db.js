// server/src/config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // optional: disables SQL logs in terminal
  }
);

// Optional connection check
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

module.exports = { connectDB, sequelize };
