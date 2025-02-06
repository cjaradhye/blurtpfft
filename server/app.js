const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport"); // Passport setup
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.GSECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose.connect(process.env.MONGOURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

// Routes
app.use(cors());
app.use("/", require("./routes/indexRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/dashboard", require("./routes/dashboardRoutes"));
app.use("/email", require("./routes/emailRoutes"));

// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
