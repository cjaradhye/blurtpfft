const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport"); // Passport setup
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 3000;

// app.use((req, res, next) => {
//   const allowedOrigins = [
//     "https://www.nahneedpfft.com",
//     "http://localhost:5173"
//   ];
//   const origin = req.headers.origin;

//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, Origin");
//   res.setHeader("Access-Control-Allow-Credentials", "true");

//   if (req.method === "OPTIONS") {
//     return res.status(204).end();
//   }

//   next();
// });

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://nahneedpfft.com"
//     ], // Allowed origins
//     credentials: true, // Allows the server to accept cookies or other credentials
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Allowed HTTP methods
//     allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin"], // Allowed headers
//     preflightContinue: false, // Pass the CORS preflight response to the next handler
//     optionsSuccessStatus: 204, // Status code for successful OPTIONS requests
//   })
// );




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
