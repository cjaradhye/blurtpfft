const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("./server/config/passport"); // Passport setup
const cors = require("cors");
require("dotenv").config({ path: "./server/.env" });

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Proper CORS Configuration
app.use(
  cors({
    origin: [
      "https://www.nahneedpfft.com",
      "http://localhost:5173"
    ], // Allowed origins
    credentials: true, // Required for authentication & cookies
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin"],
  })
);

// ✅ Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1); // Exit process if DB fails to connect
  });

// ✅ Secure Session Management (Using MongoDB Store)
app.use(
  session({
    secret: process.env.JWT_SECRET, // Use .env or fallback
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use("/", require("./server/routes/indexRoutes"));
app.use("/auth", require("./server/routes/authRoutes"));
app.use("/dashboard", require("./server/routes/dashboardRoutes"));
app.use("/email", require("./server/routes/emailRoutes"));
app.use("/feedback", require("./server/routes/feedbackRoutes"));
app.use("/unsubscribe", require("./server/routes/unsubscribeRoutes"));
app.use("/stuff", require("./server/routes/stuffRoutes"));
app.use("/users", require("./server/routes/userRoutes"));
app.use("/blurts", require("./server/routes/blurtRoutes"));
app.use("/blurt-interactions", require("./server/routes/blurtInteractionRoutes"));

// ✅ Handle Preflight Requests (Fixes OPTIONS request failures)
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, Origin");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});

// ✅ Global Error Handler (Prevents crashes)
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ error: "Something went wrong! Try again later." });
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
