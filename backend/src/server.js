require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use("/api/recommendations", recommendationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
