require("dotenv").config(); // Load .env variables
const express = require("express");
const { connectDB, sequelize } = require("./config/db");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/productRoutes");
const userController = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); // Test DB connection
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON

// Mount routes for auth
app.use("/api/auth", authRoutes);

// Mount routes for products
app.use("/api/products", productRoutes);

// Mount routes for users
app.use("/api/users", userController);

app.use("/api/orders", orderRoutes);

app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => res.send('Hello Krishan'));

// Sync models and start server
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
    console.log(`🌐 API Base URL: http://localhost:${PORT}/api`);
  });
});
