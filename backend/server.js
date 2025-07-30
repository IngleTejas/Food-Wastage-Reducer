const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Allows JSON data in requests

// Dummy route
app.get("/", (req, res) => {
  res.send("Food Wastage Reducer API is running...");
});

// Load routes
app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/donations", require("./routes/donationRoutes"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
